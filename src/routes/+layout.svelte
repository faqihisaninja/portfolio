<script>
    import Cursor from '../components/Cursor/Cursor.svelte';
	import MenuTablet from '../components/MenuTablet/MenuTablet.svelte';
    import Menu from "../components/Menu/Menu.svelte";
</script>

<div class="layout">
    <div class="topBar">
        <MenuTablet />
    </div>
    <div class="sideBar">
        <Menu />
    </div>
    <main class="mainWrapper">
        <slot />
    </main>
    <Cursor />
</div>

<style>
    .layout {
        width: 100%;
        height: auto;
        position: relative;
    }
    .mainWrapper {
        width: 100%;
        min-height: 100vh;
        position: relative;
    }
    .sideBar {
        position: fixed;
        width: 350px;
        z-index: 12;
    }
    .topBar {
        display: none;
    }

    @media only screen and (max-width: 1024px) {
        .layout {
            flex-direction: column;
        }
        .sideBar {
            display: none;
        }
        .topBar {
            display: block;
        }
    }
</style>
