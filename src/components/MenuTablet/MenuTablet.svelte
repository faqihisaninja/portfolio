<script>
	import { page } from '$app/stores';

	import Hamburger from '../Hamburger/Hamburger.svelte';
	import MenuLink from '../MenuLink/MenuLink.svelte';

	let showMenu = false;
</script>

<div class="topBarWrapper">
	<div class="topBarInner">
		<div class="logo">
			<a class="logoText" href="/">Faqih</a>
		</div>
		<div class="hamburger">
			<Hamburger bind:showMenu />
		</div>
	</div>
</div>

<nav class:showMenu class="sideMenu">
	<ul>
		<MenuLink tablet text="Home" href="/" isActive={$page.url.pathname === '/'} />
		<MenuLink tablet text="About" href="/about" isActive={$page.url.pathname === '/about'} />
		<MenuLink
			tablet
			text="Portfolio"
			href="/portfolio"
			isActive={$page.url.pathname === '/portfolio'}
		/>
		<!-- <MenuLink
			tablet
			text="Contact"
			href="/contact"
			isActive={$page.url.pathname === '/contact'}
		/> -->
		<a href="https://github.com/faqihisaninja" class="links">
			<img class="github" src="/github-mark/github-mark.png" alt="Github logo" />
		</a>
	</ul>
</nav>

<style>
	.topBarWrapper {
		position: relative;
		height: 70px;
		z-index: 12;
	}

	.topBarInner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.logoText {
		text-decoration: none;
		font-family: 'Conthrax';
		font-size: 25px;
		color: #000;
		filter: blur(0.5px);
		margin: 0;
	}

	.sideMenu {
		position: fixed;
		top: 0;
		right: -250px;
		background-color: #fff;
		height: 100vh;
		width: 250px;
		padding-top: 50px;
		z-index: 11;
		transition: right 0.3s ease-in-out;
	}
	.showMenu.sideMenu {
		right: 0;
	}
	.github {
		width: 15%;
	}
</style>
