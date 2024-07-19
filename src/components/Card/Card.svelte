<script>
	import { hover } from '../Cursor/stores';

	export let imgUrl = '';
	export let imgAlt = '';
	export let title = '';
	export let description = '';
	export let link = '';
	export let githubLink = '';
</script>

<div class="card">
	<div class="image">
		<img src={imgUrl} alt={imgAlt} />
	</div>
	<div class="details">
		<h1 class="cardTitle">
			<a
				href={link}
				target="_blank"
				on:mouseenter={() => hover.set(true)}
				on:mouseleave={() => hover.set(false)}>{title}</a
			>
		</h1>
		<p class="cardDes">{description}</p>
		<a
			href={githubLink}
			target="_blank"
			on:mouseenter={() => hover.set(true)}
			on:mouseleave={() => hover.set(false)}
			><img class="github" src="github-mark/github-mark.svg" alt="Github mark" />
		</a>
	</div>
</div>

<style>
	.card {
		width: 30%;
		padding: 10px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
	}
	.image {
		text-align: center;
		width: 100%;
		margin-bottom: 10px;
	}
	img {
		max-width: 100%;
		object-fit: cover;
	}
	.details {
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		padding: 20px 20px 10px 20px;
	}
	.cardTitle {
		font-size: 18px;
		margin: 0;
	}
	.cardTitle a {
		text-decoration: none;
		color: #000;
	}
	.cardDes {
		font-size: 15px;
		color: #767676;
		margin: 10px 0;
	}
	.github {
		width: 20%;
	}
	@media only screen and (max-width: 1024px) {
		.card {
			width: 100%;
		}
		.github {
			width: 50px;
			margin-top: 5px;
		}
	}

	@media only screen and (max-width: 400px) {
		.github {
			width: 15%;
		}
	}
</style>
