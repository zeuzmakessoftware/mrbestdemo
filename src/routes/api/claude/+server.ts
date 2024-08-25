import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { CLAUDE_API_KEY } from '$env/static/private';

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const ipRequestCounts = new Map<string, { count: number; timestamp: number }>();

export const POST: RequestHandler = async ({ request }: { request: Request }) => {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('remote-addr');
    
    if (!ip) {
        return json({ error: 'Unable to determine IP address' }, { status: 400 });
    }

    const currentTime = Date.now();
    const requestCount = ipRequestCounts.get(ip);

    if (requestCount) {
        if (currentTime - requestCount.timestamp < RATE_LIMIT_WINDOW_MS) {
            if (requestCount.count >= RATE_LIMIT_MAX_REQUESTS) {
                return json({ error: 'Rate limit exceeded. Try again later.' }, { status: 429 });
            }
            ipRequestCounts.set(ip, { count: requestCount.count + 1, timestamp: requestCount.timestamp });
        } else {
            ipRequestCounts.set(ip, { count: 1, timestamp: currentTime });
        }
    } else {
        ipRequestCounts.set(ip, { count: 1, timestamp: currentTime });
    }

    try {
        const { messages } = await request.json();
        
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'anthropic-version': '2023-06-01',
                'x-api-key': CLAUDE_API_KEY
            },
            body: JSON.stringify({
                model: "claude-3-haiku-20240307",
                messages: messages,
                max_tokens: 1024,
                temperature: 0.8,
            })
        });

        const data = await response.json();

        return json(data);
    } catch (error) {
        console.error('Claude API error:', error);
        return json({ error: 'Claude API error' }, { status: 500 });
    }
};