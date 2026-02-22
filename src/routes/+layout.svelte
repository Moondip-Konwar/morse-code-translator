<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
	<title>Morse Code Translator</title>
</svelte:head>

<!-- Navbar -->
<nav class="flex flex-row justify-between p-4 text-xl items-center">
	<!-- Title -->
	<div>
		<h1 class="font-black">Morse Code Translator</h1>
	</div>

	<!-- Nav Items -->
	<div id="nav-items" class="flex flex-row gap-3">
		<a href="#about">About</a>
		<a href="">Github</a>
	</div>
</nav>
{@render children()}

<style>
	#nav-items > a:hover {
		cursor: pointer;
	}

	nav {
		border-bottom: 1px solid black;
	}
</style>
