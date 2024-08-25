<script lang="ts">
    import { onMount } from 'svelte';

    let step: number = 1;
    let answers: Record<string, string> = {};
    let currentQuestion: string = "Hi, I'm Mr. Beast, welcome to the game. I'm going to ask you a few questions to get to know you better. Let's get started.";
    let inputPlaceholder: string = "Your answer here...";
    let showInput: boolean = false;
    let showWinningLink: boolean = false;
    let showSpinner: boolean = false;
    let stepInput: string | number = '';
    let displayText: string = currentQuestion;
    let typingInterval: number = 20;
    let isTypingComplete: boolean = true;

    const questions: string[] = [
        "What's your name?",
        "What's your favorite activity to do?",
        "If you could collaborate with any internet personality, who would it be?",
        "What's your favorite Mr. Beast video?",
        "Guess a number between 1 and 10,000."
    ];

    async function fetchDynamicQuestion(question: string, context: Record<string, string>): Promise<void> {
        currentQuestion = '';
        displayText = '';
        isTypingComplete = false;

        const contextString = Object.entries(context).map(([question, answer]) => `Past Question: ${question}\nPast Answer: ${answer}`).join('\n\n');

        const response = await fetch('/api/claude', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                system: "You are a helpful, smart, kind, and efficient assistant who's also a YouTuber named Mr. Beast. You always fulfill the user's requests to the best of your ability.",
                messages: [
                    { "role": "user", "content": `Hello! Pretend I'm a fan of Mr Beast and you're Mr Beast, Can you ask me "${question}". ${step < 2 ? '' : `Make sure to mention what we've discussed so far in your question (pretend we've been having a consistent conversation):\n${contextString}`} Only use a couple sentences.` }
                ]
            })
        });

        const data = await response.json();

        if (data.content && data.content.length > 0 && data.content[0].text) {
            currentQuestion = data.content[0].text;
            typeText(currentQuestion);
        } else {
            console.error('Unexpected response structure:', data);
            currentQuestion = 'Sorry, something went wrong. Please try again.';
            typeText(currentQuestion);
        }
    }

    function typeText(text: string) {
        let index = 0;
        displayText = '';
        isTypingComplete = false;

        const interval = setInterval(() => {
            if (index < text.length) {
                displayText += text[index];
                index++;
            } else {
                clearInterval(interval);
                isTypingComplete = true;
            }
        }, typingInterval);
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            nextStep();
        }
    }

    async function nextStep(): Promise<void> {
        if (step <= questions.length) {
            if (step > 1) {
                const previousQuestion = questions[step - 2];
                answers[previousQuestion] = stepInput as string;
            }

            if (step < questions.length) {
                await fetchDynamicQuestion(questions[step - 1], answers);
                stepInput = '';
                inputPlaceholder = "Your answer here...";
            } else if (step === questions.length) {
                currentQuestion = questions[step - 1];
                typeText(currentQuestion);
                stepInput = '';
                inputPlaceholder = 'Enter your guess here...';
            }

            step++;
        } else {
            const previousQuestion = questions[step - 2];
            answers[previousQuestion] = stepInput as string;

            showInput = false;
            showSpinner = true;
            currentQuestion = "Processing the number with the winning number...";
            typeText(currentQuestion);
            
            setTimeout(() => {
                showSpinner = false;
                currentQuestion = "Congratulations, you won! As a token for your luck and dedication as a Mr Beast fan, here's a link to a get a free Samsung device.";
                typeText(currentQuestion);
                showWinningLink = true;
            }, 3000);
        }
    }

    $: showInput = step > 1 && step <= questions.length + 1;
</script>

<div class="bg-[#0396FF] min-h-screen w-full relative flex flex-col justify-between overflow-hidden">
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 pt-4 opacity-60">
        <img alt="beast" src="Mr-Beast-Logo-700x394-1.png" />
    </div>
    <div class="mt-auto relative">
        <img class="w-full h-auto" alt="beasttalking" src="beasttalking-hd.png" />
        <div class="absolute bottom-[35%] right-[15%] sm:bottom-[35%] sm:right-[10%] bg-neutral-800 text-white p-4 sm:p-6 rounded-lg shadow-lg text-black text-sm sm:text-lg max-w-[50%] sm:max-w-[40%]">
            <p id="questionText" class="text-sm beast">
                {displayText}
            </p>
            {#if showInput && isTypingComplete}
                {#if step === questions.length + 1}
                    <input type="number" on:keydown={handleKeydown} bind:value={stepInput} placeholder={inputPlaceholder} class="text-black w-full mt-4 p-2 rounded" min="1" max="10000">
                {:else}
                    <input type="text" on:keydown={handleKeydown} bind:value={stepInput} placeholder={inputPlaceholder} class="text-black w-full mt-4 p-2 rounded">
                {/if}
            {/if}
            {#if showSpinner}
                <div class="spinner mt-4"></div>
            {/if}
            {#if isTypingComplete}
                <button class="float-right bg-blue-500 rounded-xl p-4 mt-4" on:click={nextStep} disabled={showSpinner}>Next</button>
            {/if}
            {#if showWinningLink}
                <a href="/signin" target="_blank" class="mt-4 text-sm text-blue-400 hover:text-blue-500 underline">I need to check if you're subscribed so log in to prove your a MrBeast fan.</a>
            {/if}
        </div>
    </div>
</div>

<style>
    .spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        color: white;
        font-size: 16px;
    }
</style>
