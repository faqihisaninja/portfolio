<script>
	import { spring } from 'svelte/motion';
	import { writable } from 'svelte/store';

    export let hover = false;

	let coords = spring({ x: 50, y: 50 }, {
		stiffness: 0.03,
		damping: 0.3
	});
    let coords2 = writable({ x: 50, y: 50 });
</script>

<svelte:window
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
		coords2.set({ x: e.clientX, y: e.clientY });
	}} />
<svg>
	<circle
        class="outer"
		cx={$coords.x}
		cy={$coords.y}
		r={hover ? 30 : 10}
        fill={hover ? "#6a6a6a61" : "none"}
        stroke={hover ? "none" : "#6a6a6a61"}
        stroke-width={hover ? 0 : 2}
	/>
	<circle
		cx={$coords2.x}
		cy={$coords2.y}
		r={3}
        fill={hover ? "none" : "#676767"}
	/>
</svg>

<style>
	svg {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
        pointer-events: none;
        z-index: 9999;
	}
	.outer {
        /* transition: all .1s ease; */
	}
</style>