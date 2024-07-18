<script>
	import { fade, fly } from 'svelte/transition';
	import { enhance } from '$app/forms';

	import Button from '../../components/Button/Button.svelte';

	export let form;

	let name = '';
	let email = '';
	let subject = '';
	let message = '';

	let emailErr = false;

	const validateEmail = () => {
		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		emailErr = !emailRegex.test(email);
	};
</script>

<div
	class="container"
	in:fly={{ delay: 500, duration: 1500, x: '-5%' }}
	out:fade={{ duration: 500 }}
>
	<h1 class="pageTitle">// Contact</h1>
	<form method="POST" class="form" use:enhance>
		<div class="row">
			<input value={form?.name ?? ''} type="text" name="name" placeholder="Name" />
			{#if form?.invalidEmail}
				<span class="errMsg">Not a valid email</span>
			{/if}
			<input
				class:error={form?.invalidEmail}
				value={form?.email ?? ''}
				type="text"
				name="email"
				placeholder="Email"
			/>
		</div>
		<div class="row">
			<input value={form?.subject ?? ''} type="text" name="subject" placeholder="Subject" />
		</div>
		<div class="row">
			<textarea
				value={form?.messageBody ?? ''}
				class="messageInput"
				name="message"
				placeholder="Message"
			/>
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
		position: relative;
		display: flex;
		width: 100%;
		gap: 15px;
	}
	.messageInput {
		height: 150px;
		resize: none;
	}
	.error {
		border: 1px solid rgba(255, 0, 0, 0.5) !important;
	}
	.errMsg {
		position: absolute;
		top: -15px;
		left: 0;
		font-size: 10px;
		color: red;
	}

	@media only screen and (max-width: 1600px) {
		.container {
			padding: 80px 40px;
		}
	}
	@media only screen and (max-width: 1024px) {
		.container {
			width: 100%;
		}
		.pageTitle {
			margin-bottom: 50px;
		}
		.form {
			display: block;
		}
		.form .row {
			display: block;
		}
		.form input,
		.form textarea {
			width: 100%;
			margin-bottom: 15px;
		}
	}
</style>
