<script>
	import Button from '../../components/Button/Button.svelte';

	let name = '';
	let email = '';
	let phone = '';
	let subject = '';
	let message = '';
</script>

<div class="container">
	<h1 class="pageTitle">// Contact</h1>
	<form class="form">
		<div class="row">
			<input bind:value={name} type="text" placeholder="Name" />
			<input bind:value={email} type="text" placeholder="Email" />
		</div>
		<div class="row">
			<input bind:value={phone} type="text" placeholder="Phone" />
			<input bind:value={subject} type="text" placeholder="Subject" />
		</div>
		<div class="row">
			<textarea class="messageInput" bind:value={message} placeholder="Message" />
		</div>
		<Button title="Send message" />
	</form>
</div>

<style>
	.container {
		width: calc(100% - 350px);
		box-sizing: border-box;
		position: absolute;
		top: 0;
		right: 0;
		padding: 80px 120px;
		min-height: 100vh;
		background-color: #f9f9f9;
	}

	.pageTitle {
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 5px;
		text-transform: uppercase;
		margin-bottom: 70px;
	}

	.form {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 15px;
	}
	.form input,
	.form textarea {
		box-sizing: border-box;
		padding: 10px 20px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		background-color: transparent;
		flex: 1;
	}
	.form .row {
		display: flex;
		width: 100%;
		gap: 15px;
	}
	.messageInput {
		height: 150px;
		resize: none;
	}

	@media only screen and (max-width: 1600px) {
		.container {
			padding: 80px 40px;
		}
	}
</style>
