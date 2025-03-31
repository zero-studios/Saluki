<script lang="ts">
    interface Props {
        video: {
            url: string;
        };
        classes?: string;
    }

    let { video, classes = "" }: Props = $props();
    let media_paused: boolean | null | undefined = $state(false);
</script>

<div class="w-full h-full bg-[#fff] relative {classes}">
    <video
        class="w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
        bind:paused={media_paused}
    >
        <source src={video?.url} />
    </video>
    <button
        aria-label="{media_paused
            ? 'Play'
            : 'Pause'} hero background video."
        onclick={() => {
            media_paused = !media_paused;
        }}
        class="absolute bottom-3 right-3 z-30 bg-[#fff] rounded-full w-[32px] h-[32px] flex items-center justify-center"
    >
        {#if media_paused}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#001F5F"
                ><path d="M320-200v-560l440 280-440 280Z" /></svg
            >
        {:else}
            <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.5 11.25V0.75H9.5V11.25H6.5ZM0.5 11.25V0.75H3.5V11.25H0.5Z"
                    fill="#001F5F"
                />
            </svg>
        {/if}
    </button>
</div>