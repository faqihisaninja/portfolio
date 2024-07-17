<script>
	import { hover } from '../Cursor/stores';

	export let onClick = null;
	export let title = '';

	const handleClick = () => {
		if (onClick) onClick();
	};
</script>

<button
	on:click={handleClick}
	class="btn"
	on:mouseenter={() => hover.set(true)}
	on:mouseleave={() => hover.set(false)}
>
	<div class="wrapper">
		<span class="before">{title}</span>
		<span class="after">{title}</span>
	</div>
</button>

<style>
	.btn {
		position: relative;
		max-width: 200px;
		height: 52px;
		width: 100%;
		background-color: #666;
		color: #fff;
		border: none;
		text-transform: uppercase;
		overflow: hidden;
		cursor: pointer;
	}
	.wrapper {
		position: relative;
		width: 100%;
		height: 15px;
		overflow: hidden;
	}
	.before,
	.after {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		text-align: center;
	}
	.before {
		transform: translateY(0);
		transition: all 0.3s ease;
	}
	.btn:hover .before {
		transform: translateY(-100%);
		transition: all 0.3s ease;
	}
	.after {
		transform: translateY(100%);
		transition: all 0.3s ease;
	}
	.btn:hover .after {
		transform: translateY(0);
		transition: all 0.3s ease;
	}
	.btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #000;
		transform: translateY(100%);
		transition: all 0.3s ease;
	}
	.btn:hover:before {
		transform: translateY(0);
		transition: all 0.3s ease;
	}
</style>
