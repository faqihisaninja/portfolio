<script>
	import { onMount } from 'svelte';

	import Cursor from '../components/Cursor/Cursor.svelte';
	import MenuTablet from '../components/MenuTablet/MenuTablet.svelte';
	import Menu from '../components/Menu/Menu.svelte';

	let initLoad = true;
	let startLoad = false;
	let endLoad = false;
	let contentVisible = false;

	onMount(() => {
		setTimeout(() => (startLoad = true), 1000);
		setTimeout(() => (endLoad = true), 2500);
		setTimeout(() => (contentVisible = true), 2800);
		setTimeout(() => (initLoad = false), 3500);
	});
</script>

{#if initLoad}
	<div class:contentVisible class="loadAnimLeft" />
	<div class:startLoad class:endLoad class="loaderLine" />
	<div class:contentVisible class="loadAnimRight" />
{/if}
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
	.loadAnimLeft,
	.loadAnimRight {
		position: fixed;
		width: 50vw;
		height: 100vh;
		border: none;
		background-color: #242424;
		z-index: 9998;
	}
	.loaderLine {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 2px;
		height: 0px;
		opacity: 1;
		background-color: white;
		transform: translate(-50%, -50%);
		z-index: 9999;
	}
	.loaderLine.startLoad {
		height: 200px;
		transition: height 1.5s ease;
	}
	.loaderLine.endLoad {
		height: 120vh;
		opacity: 0;
		transition: all 0.5s linear;
	}
	.loadAnimRight {
		transform: translateX(100%);
	}
	.loadAnimLeft.contentVisible {
		transform: translateX(-100%);
		transition: transform 0.5s ease-in;
	}
	.loadAnimRight.contentVisible {
		transform: translateX(200%);
		transition: transform 0.5s ease-in;
	}
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
		.loadAnimLeft,
		.loadAnimRight,
		.loaderLine,
		.sideBar {
			display: none;
		}
		.topBar {
			display: block;
		}
	}
</style>
