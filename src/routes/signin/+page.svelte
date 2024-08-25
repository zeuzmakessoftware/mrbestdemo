<script lang="ts">
    import LogosGoogleIcon from '~icons/logos/google-icon';
    import PhUserCircleLight from '~icons/ph/user-circle-light';

    let email = '';
    let password = '';
    let showPassword = false;
    let step = 1;
    let emailValid = true;

    function nextStep() {
        if (step === 1) {
            if (isValidEmail(email)) {
                emailValid = true;
                step = 2;
            } else {
                emailValid = false;
            }
        } else if (step === 2 && password) {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            nextStep();
        }
    }

    function isValidEmail(email: string): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
</script>

<div class="flex items-center justify-center min-h-screen bg-[#f0f4f9]">
    <div class="bg-white rounded-lg p-8 max-w-3xl w-full">
        <div class="flex justify-between">
            <div>
                <LogosGoogleIcon font-size={30} />
                {#if step === 1}
                    <h2 class="g text-3xl mt-6">Sign in</h2>
                    <p class="g text-md my-4">to continue to YouTube</p>
                {/if}
                {#if step === 2}
                    <h2 class="g text-3xl mt-6">Welcome</h2>
                    <div class="flex items-center mt-4">
                        <span class="border border-gray-300 rounded-full p-2">
                            <PhUserCircleLight />
                        </span>
                        <p class="ml-2">{email}</p>
                    </div>
                {/if}
            </div>
            <div class="flex flex-col">
                {#if step === 1}
                    <input
                        type="email"
                        placeholder="Email"
                        bind:value={email}
                        class="border rounded-sm p-3 w-64 mt-16 px-4 ${emailValid ? 'border-gray-500' : 'border-red-500 bg-red-300'}"
                        on:keydown={handleKeydown}
                    />
                    <a class="text-blue-600 text-sm my-2" href="/signin">Forgot email?</a>
                {/if}
                {#if step === 2}
                    {#if showPassword}
                        <input type="text" placeholder="Enter your password" on:keydown={handleKeydown} bind:value={password} class="border border-gray-500 rounded-sm p-3 w-64 px-4 mt-8" />
                    {:else}
                        <input type="password" placeholder="Enter your password" on:keydown={handleKeydown} bind:value={password} class="border border-gray-500 rounded-sm p-3 w-64 px-4 mt-8" />
                    {/if}
                    <div class="flex items-center mt-2">
                        <input type="checkbox" bind:checked={showPassword} class="mr-2" />
                        <label class="text-sm">Show password</label>
                    </div>
                    <a class="text-blue-600 text-sm my-4" href="/forgot-password">Forgot password?</a>
                {/if}
                {#if step === 1}
                    <p class="text-xs text-neutral-500 w-80 mt-16">Not your computer? Use Guest mode to sign in privately.<br/><span class="text-blue-600">Learn more about using Guest mode</span></p>
                {/if}
                <div class="flex justify-end w-60 gap-4 mt-8">
                    {#if step === 1}
                        <button on:click={nextStep} class="text-xs hover:bg-blue-600 bg-blue-500 text-white rounded-[2em] p-3 w-64 mt-2">Next</button>
                    {/if}
                    {#if step === 2}
                        <button on:click={nextStep} class="text-xs hover:bg-blue-600 bg-blue-500 text-white rounded-[2em] p-3 w-64 mt-2">Next</button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
