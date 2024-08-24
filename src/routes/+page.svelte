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
            <g>
            <path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"></path>
            <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"></path>
            </g>
            <g id="youtube-paths_yt3">
            <path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z"></path>
            <path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z"></path>
            <path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z"></path>
            <path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z"></path>
            <path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z"></path>
            <path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z"></path>
            <path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z"></path>
            </g>
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
    <div class="bg-black w-full w-[50em] h-[25em] rounded-xl">
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
