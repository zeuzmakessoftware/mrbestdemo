import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { CLAUDE_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }: { request: Request }) => {
    const { messages } = await request.json();

    try {
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
