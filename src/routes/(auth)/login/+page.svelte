<script lang="ts">
	import { signIn } from '@/lib/auth/client';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let errorMessage = $state('');

	const handleSignUp = async () => {
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
	};
</script>

<h1 class="auth-header">Account Login</h1>

<form class="card auth-form" autocomplete="off">
	<label>
		Email
		<input name="email" type="email" bind:value={email} />
	</label>

	<label>
		Password
		<input name="password" type="password" bind:value={password} />
	</label>

	<input type="button" value="Log in" onclick={handleSignUp} />

	{#if errorMessage}
		<p class="text-rose-500">{errorMessage}</p>
	{/if}
</form>

<p class="auth-footer">Don't have an account? <a href="/signup">Sign up</a></p>
