<script>
	import { hover } from '../Cursor/stores';

	export let isActive = false;
	export let href = '';
	export let text = '';
	export let tablet = false;
</script>

<li class:isActive>
	<a
		class:tablet
		on:mouseenter={() => hover.set(true)}
		on:mouseleave={() => hover.set(false)}
		{href}>{text}</a
	>
</li>

<style>
	li {
		list-style: none;
		margin: 0 0 10px;
	}

	a {
		color: #bbb;
		text-decoration: none;
		font-optical-sizing: auto;
		font-weight: 500;
		font-style: normal;
		font-size: 13px;
		line-height: 1.8;
		text-transform: uppercase;
		transition: color 0.9s cubic-bezier(0.61, 0.29, 0, 0.89);
	}
	a.tablet {
		color: #000;
		transition: color 0.2s cubic-bezier(0.61, 0.29, 0, 0.89);
	}

	li:hover a:not(.tablet),
	li.isActive a:not(.tablet) {
		color: #fff;
		transition: color 0.2s cubic-bezier(0.61, 0.29, 0, 0.89);
	}
	li:hover a.tablet,
	li.isActive a.tablet {
		color: #bbb;
		transition: color 0.2s cubic-bezier(0.61, 0.29, 0, 0.89);
	}
</style>
