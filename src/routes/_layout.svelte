<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div class='level'>
  <Nav {segment}/>
</div>
<div class='level'>
  <div class='columns'>
    <main class=''>
      <slot></slot>
    </main>
  </div>>
</div>
