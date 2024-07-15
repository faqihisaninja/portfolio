<script>
    import { onMount } from "svelte";
    import { fade, fly, slide } from "svelte/transition";
    import { backInOut } from "svelte/easing";

    let titleIndex = 0;
    let titles = ["UI Developer", "UI/UX Designs", "Animations"];

    onMount(() => {
        const interval = setInterval(() => {
            titleIndex === 2 ? titleIndex = 0 : titleIndex++;
        }, 2500);

        return () => clearInterval(interval);
    });
</script>

<div in:fly={{ delay: 500, duration: 1500, x: '-5%' }} out:fade={{ duration: 500 }} class="container">
    <div class="left">
        <span class="name">// Abdurrahman Faqih</span>
        {#key titleIndex}
            <h1 in:slide={{ delay: 500, axis:'x', easing: backInOut, duration: 2000 }}
                out:slide={{ axis:'x', easing: backInOut, duration: 2000 }} class="title">
                {titles[titleIndex]}
            </h1>
        {/key}
    </div>
    <div class="right">
        <div class="absImage">
            <img class="selfImage" src="/self-photo.jpg" alt="Me eating" />
        </div>
    </div>
</div>

<style>
    .container {
        width: calc(100% - 350px);
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        min-height: 100vh;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f9f9f9;
    }
    .left, .right {
        position: relative;
        width: 50%;
    }
    .name {
        font-family: "Syne", sans-serif;
        line-height: 1.8;
        font-weight: 400;
        text-transform: uppercase;
        color: #767676;
    }
    .title {
        position: absolute;
        font-family: "Syne", sans-serif;
        font-size: 31px;
        text-transform: uppercase;
        white-space: nowrap;
    }
    .selfImage {
        width: 80%;
        max-width: 400px;
        height: auto;
        object-fit: cover;
    }
    .absImage::before {
        position: absolute;
        content: "";
        top: -15px;
        left: -15px;
        bottom: 15px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        transition: all .3s ease;
    }

    @media only screen and (min-width: 1248px) {
        .container {
            padding: 0 40px;
        }
    }
</style>