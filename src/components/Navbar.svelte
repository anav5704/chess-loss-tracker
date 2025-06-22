<script lang="ts">
	import { signOut } from '@/lib/auth/client';
	import { goto } from '$app/navigation';

	const handleLogout = () => {
		signOut({
			fetchOptions: {
				onSuccess: () => {
					goto('/login', { replaceState: true });
				}
			}
		});
	};
</script>

<nav>
	<button onclick={handleLogout}>Log out</button>
</nav>
