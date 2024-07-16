<script>
    import { coord, hover } from './stores';
</script>

<svelte:window
	on:mousemove={(e) => {
		coord.set({ x: e.clientX, y: e.clientY });
	}} />
<svg>
	<circle
        class="outer"
        class:hover={$hover}
		cx={$coord.x}
		cy={$coord.y}
	/>
	<circle
        class="inner"
        class:hover={$hover}
		cx={$coord.x}
		cy={$coord.y}
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
        r: 13;
        fill: none;
        stroke: #6a6a6a;
        stroke-width: 2;
        transition: all .1s ease;
    }
    .outer.hover {
        r: 0;
        fill: #4d4d4d;
        stroke: none;
    }
    .inner {
        r: 3;
        fill: #303030;
        transition: r .1s ease;
    }
    .inner.hover {
        r: 30;
        fill: #6a6a6a61;
        transition: r .1s ease;
    }
</style>