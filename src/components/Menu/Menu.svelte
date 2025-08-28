<script>
	import { page } from '$app/stores';
	import { hover } from '../Cursor/stores';

	import MenuLink from '../MenuLink/MenuLink.svelte';
</script>

<nav class="menuWrapper">
	<div class="menuInner">
		<div class="logo">
			<a
				class="logoText"
				href="/"
				on:mouseenter={() => hover.set(true)}
				on:mouseleave={() => hover.set(false)}>Faqih</a
			>
		</div>
		<div class="menu">
			<ul>
				<MenuLink text="Home" href="/" isActive={$page.url.pathname === '/'} />
				<MenuLink text="About" href="/about" isActive={$page.url.pathname === '/about'} />
				<MenuLink
					text="Portfolio"
					href="/portfolio"
					isActive={$page.url.pathname === '/portfolio'}
				/>
				<!-- <MenuLink
					text="Contact"
					href="/contact"
					isActive={$page.url.pathname === '/contact'}
				/> -->
			</ul>
		</div>
		<div class="links">
			<a
				href="https://github.com/faqihisaninja"
				class="links"
				on:mouseenter={() => hover.set(true)}
				on:mouseleave={() => hover.set(false)}
			>
				<img class="github" src="/github-mark/github-mark-white.png" alt="Github logo" />
			</a>
		</div>
	</div>
</nav>

<style>
	.menuWrapper {
		height: 100vh;
		min-width: 180px;
		display: flex;
		align-items: center;
		padding: 0 70px;
		background-color: #444;
	}

	.menuInner {
		width: 100%;
		height: auto;
	}

	.logo {
		width: 100%;
		margin: 0;
		padding: 0;
	}
	.logoText {
		text-decoration: none;
		font-family: 'Conthrax';
		font-size: 25px;
		color: #f9f9f9;
		filter: blur(0.5px);
		margin: 0;
	}

	.menu {
		padding: 50px 0;
		width: 100%;
	}
	.menu ul {
		padding: 0;
		margin: 0;
	}

	.github {
		width: 12%;
	}
</style>
