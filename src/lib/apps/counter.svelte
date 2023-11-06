<script lang="ts">
	let counter = 0;
	function increaseCount() {
		counter += 1;
	}
	function resetCount() {
		counter = 0;
	}
	function decreaseCount() {
		counter -= 1;
	}
</script>

<button on:click={increaseCount}>+</button>
<button on:click={resetCount}>{counter}</button>
<button on:click={decreaseCount}>-</button>
