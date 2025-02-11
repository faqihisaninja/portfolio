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
		<img class="projectImg" src={imgUrl} alt={imgAlt} />
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
			class="github-link"
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
		min-height: 400px;
		background: #ffffff;
		border-radius: 12px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		overflow: hidden;
	}

	.image {
		width: 100%;
		height: 200px;
		overflow: hidden;
		background: #f5f5f5;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px 0;
	}

	.projectImg {
		width: 90%;
		height: 100%;
		object-fit: contain;
		transition: transform 0.3s ease;
	}

	.details {
		padding: 24px;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	.cardTitle {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 12px 0;
		line-height: 1.3;
	}

	.cardTitle a {
		text-decoration: none;
		color: #2d3436;
		transition: color 0.2s ease;
	}

	.cardDes {
		font-size: 1rem;
		line-height: 1.6;
		color: #636e72;
		margin: 0 0 20px 0;
	}

	.github-link {
		display: inline-block;
		transition: transform 0.2s ease;
	}

	.github {
		width: 28px;
		height: 28px;
	}

	@media only screen and (max-width: 1024px) {
		.card {
			width: 100%;
			max-width: 500px;
			margin: 0 auto 30px;
			min-height: 350px;
		}

		.image {
			height: 180px;
		}

		.projectImg {
			width: 80%;
		}
	}

	@media only screen and (max-width: 400px) {
		.card {
			min-height: 300px;
		}

		.image {
			height: 160px;
		}

		.cardTitle {
			font-size: 1.3rem;
		}

		.cardDes {
			font-size: 0.9rem;
		}
	}
</style>
