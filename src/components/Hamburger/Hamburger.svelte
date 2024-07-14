<script>
    export let showMenu = false;

    const toggleMenu = () => showMenu = !showMenu;
</script>

<button class:open={showMenu} class="hamburgerIcon" on:click={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</button>

<style>
    .hamburgerIcon {
        position: relative;
        width: 35px;
        height: 45px;
        background: none;
        border: none;
    }
    span {
        position: absolute;
        right: 0px;
        display: block;
        height: 5px;
        width: 100%;
        border-radius: 9px;
        background-color: #000;
        opacity: 1;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }
    span:nth-child(1) {
        top: 5px;
    }
    span:nth-child(2),
    span:nth-child(3) {
        top: 18px;
    }
    span:nth-child(4) {
        top: 31px;
    }

    .open span:nth-child(1),
    .open span:nth-child(4) {
        top: 18px;
        opacity: 0;
    }
    .open span:nth-child(2) {
        transform: rotate(45deg);
    }
    .open span:nth-child(3) {
        transform: rotate(-45deg);
    }
</style>