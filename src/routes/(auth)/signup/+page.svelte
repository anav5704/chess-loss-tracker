<script lang="ts">
	import { signUp } from '@/lib/auth/client';
	import { goto } from '$app/navigation';

	let name = $state('');
	let email = $state('');
	let ccUsername = $state('');
	let loUsername = $state('');
	let password = $state('');
	let errorMessage = $state('');

	const handleSubmit = async () => {
		await signUp.email({
			name,
			email,
			ccUsername,
			loUsername,
			password,
			fetchOptions: {
				onError(context) {
					errorMessage = context.error.message;
				},
				onSuccess() {
					goto('/', { replaceState: true });
				}
			}
		});
	};
</script>

<h1 class="auth-header">Create Account</h1>

<form onsubmit={handleSubmit} autocomplete="off" class="card auth-form">
	<label>
		Name
		<input name="name" type="text" required bind:value={name} />
	</label>

	<label>
		Email
		<input name="email" type="email" required bind:value={email} />
	</label>

	<label>
		Chess.com username
		<input name="ccUsername" type="text" bind:value={ccUsername} />
	</label>

	<label>
		Lichess.org username
		<input name="loUsername" type="text" bind:value={loUsername} />
	</label>

	<label>
		Password
		<input name="password" type="password" minlength="8" required bind:value={password} />
	</label>

	<input type="submit" value="Register" />

	{#if errorMessage}
		<p class="text-rose-500">{errorMessage}</p>
	{/if}
</form>

<p class="auth-footer">Already have an account? <a href="/login">Log in</a></p>
