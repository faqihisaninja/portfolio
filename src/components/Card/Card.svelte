<script>
	export let imgUrl = '';
	export let imgAlt = '';
	export let title = '';
	export let description = '';
</script>

<div class="card">
	<img src={imgUrl} alt={imgAlt} />
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
	img {
		max-width: 100%;
		margin-bottom: 10px;
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
</style>
