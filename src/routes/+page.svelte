<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    import MaterialSymbolsLightMenuRounded from '~icons/material-symbols-light/menu-rounded';
    import PhMagnifyingGlassLight from '~icons/ph/magnifying-glass-light';
    import PhMicrophoneFill from '~icons/ph/microphone-fill';
    import PhDotsThreeVertical from '~icons/ph/dots-three-vertical-bold';
    import PhUserCircleLight from '~icons/ph/user-circle-light';
    import PhDotsThree from '~icons/ph/dots-three-bold';
    import PhBookmarkSimpleThin from '~icons/ph/bookmark-simple-thin';
    import PhShareFatLight from '~icons/ph/share-fat-light';
    import PhThumbsUpThin from '~icons/ph/thumbs-up-thin';
    import PhThumbsDownThin from '~icons/ph/thumbs-down-thin';

    export const currentDate = writable('');

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    onMount(() => {
        const today = new Date();
        currentDate.set(formatDate(today));
    });

    let isMobileSearchActive = false;

    function toggleMobileSearch() {
        isMobileSearchActive = !isMobileSearchActive;
    }
</script>

<div class="w-full h-14 flex justify-between items-center px-4 sm:px-6">
    <div class="flex gap-3 items-center">
        <MaterialSymbolsLightMenuRounded font-size={28} />
        <svg xmlns="http://www.w3.org/2000/svg" id="yt-ringo2-svg_yt3" width="90" height="17" viewBox="0 0 93 20" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
            <!-- SVG content here -->
        </svg>
    </div>
    <div class="flex items-center gap-2 flex-grow justify-end md:justify-center max-w-[30em]">
        {#if !isMobileSearchActive}
            <div class="hidden md:flex items-center flex-grow bg-white border-[1px] border-neutral-300 rounded-full shadow-xs">
                <input
                    type="text"
                    placeholder="Search"
                    class="px-4 text-[14px] font-semilight w-full rounded-l-full focus:outline-none"
                />
                <button class="px-3 py-2 bg-neutral-100 border-l-[1px] border-neutral-300 rounded-r-full focus:outline-none">
                    <PhMagnifyingGlassLight />
                </button>
            </div>
            <div class="flex md:hidden gap-2">
                <button class="px-2 py-2 bg-neutral-100 rounded-full focus:outline-none" on:click={toggleMobileSearch}>
                    <PhMagnifyingGlassLight />
                </button>
                <button class="px-2 py-2 bg-neutral-100 rounded-full focus:outline-none">
                    <PhMicrophoneFill />
                </button>
            </div>
        {/if}
        {#if isMobileSearchActive}
            <div class="flex items-center flex-grow bg-white border-[1px] border-neutral-300 rounded-full shadow-xs">
                <input
                    type="text"
                    placeholder="Search"
                    class="px-4 text-[14px] font-semilight w-full rounded-l-full focus:outline-none"
                />
                <button class="px-3 py-2 bg-neutral-100 border-l-[1px] border-neutral-300 rounded-r-full focus:outline-none" on:click={toggleMobileSearch}>
                    <PhMagnifyingGlassLight />
                </button>
            </div>
        {/if}
    </div>
    <div class="flex gap-2 items-center">
        <PhDotsThreeVertical font-size={20} />
        <button class="flex gap-1 items-center px-3 py-[6px] border-[1px] border-neutral-300 rounded-[3em]">
            <PhUserCircleLight font-size={20} color={"RoyalBlue"} />
            <p class="text-xs font-bold text-blue-600">Sign in</p>
        </button>
    </div>
</div>

<div class="flex justify-center items-center mt-4">
    <div class="bg-black w-full w-[90%] h-[25em] rounded-xl">
    </div>
</div>

<div class="px-4 py-4">
    <h1 class="text-lg sm:text-xl text-black font-bold">This Video Will Selfdestruct In One Hour!</h1>
    <div class="flex flex-col sm:flex-row justify-between items-start my-2">
        <div class="flex gap-3 items-center">
            <img class="w-10 h-10 rounded-[3em]" src="https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj" />
            <div>
                <h3 class="text-black text-sm font-semibold">MrBeast</h3>
                <p class="text-neutral-600 text-xs">312M subscribers</p>
            </div>
            <div class="flex gap-2 sm:gap-3">
                <button class="px-3 h-9 bg-gray-100 hover:bg-neutral-300 rounded-[3em] text-xs font-semibold">Join</button>
                <button class="px-3 h-9 bg-black hover:bg-neutral-800 rounded-[3em] text-xs font-semibold text-white">Subscribe</button>
            </div>
        </div>
        <div class="flex gap-2 sm:gap-3 items-center mt-2 sm:mt-0">
            <div class="flex items-center bg-gray-100 rounded-full">
                <button class="flex items-center justify-center w-24 h-9 hover:bg-gray-200 rounded-l-full transition-colors">
                    <PhThumbsUpThin font-size={18} />
                    <span class="text-black font-medium mx-2 text-sm">6.2M</span>
                </button>
                <div class="border-r border-gray-400 h-6"></div>
                <button class="flex items-center justify-center w-11 h-9 hover:bg-gray-200 rounded-r-full transition-colors">
                    <PhThumbsDownThin font-size={18} />
                </button>
            </div>
            <button class="px-3 h-9 bg-gray-100 hover:bg-gray-200 rounded-[3em] text-xs font-semibold flex items-center gap-1">
                <PhShareFatLight font-size={18} />
                Share
            </button>
            <button class="px-3 h-9 bg-gray-100 hover:bg-gray-200 rounded-[3em] text-xs font-semibold flex items-center gap-1">
                <PhBookmarkSimpleThin font-size={18} />
                Save
            </button>
            <button class="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-[3em] text-xs font-semibold flex justify-center items-center">
                <PhDotsThree font-size={18} />
            </button>
        </div>
    </div>
    <div class="h-fit w-full bg-[#eeeeee] p-3 rounded-xl">
        <div class="flex gap-2">
            <h3 class="text-[13px] font-semibold text-black">67,157 views</h3>
            <h3 class="text-[13px] font-semibold text-black">{ $currentDate }</h3>
        </div>
        <p class="text-[13px]">
            You are one of the chosen ones!<br />
            Play our game now:
            <a href="/" class="text-blue-500 hover:text-blue-600">https://go.shop.app/prize</a>
        </p>
    </div>
</div>
