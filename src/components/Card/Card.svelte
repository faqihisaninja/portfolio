<script>
	export let imgUrl = '';
	export let imgAlt = '';
	export let title = '';
	export let description = '';
</script>

<div class="card">
	<div class="image">
		<img src={imgUrl} alt={imgAlt} />
	</div>
	<div class="details">
		<h1 class="cardTitle">{title}</h1>
		<p class="cardDes">{description}</p>
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
	.cardDes {
		font-size: 15px;
		color: #767676;
		margin: 10px 0;
	}
	@media only screen and (max-width: 1024px) {
		.card {
			width: 100%;
		}
	}
</style>
