<script lang="ts">
	import Button from '@/components/Button.svelte';
	import { signIn } from '@/lib/auth/client';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let errorMessage = $state('');
	let isLoading = $state(false);

	const handleSubmit = async () => {
		isLoading = true;

		await signIn.email({
			email,
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

		isLoading = false;
	};
</script>

<h1 class="auth-header">Account Login</h1>

<form onsubmit={handleSubmit} autocomplete="off" class="card auth-form">
	<label>
		Email
		<input name="email" type="email" required bind:value={email} />
	</label>

	<label>
		Password
		<input name="password" type="password" minlength="8" required bind:value={password} />
	</label>

	<Button label="Log in" type="submit" {isLoading} />

	{#if errorMessage}
		<p class="text-rose-500">{errorMessage}</p>
	{/if}
</form>

<p class="auth-footer">Don't have an account? <a href="/signup">Sign up</a></p>
