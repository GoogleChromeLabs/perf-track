<script>
	export let img;
	export let label;
	export let data;

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<style>
  select {
    margin: 0;
		min-width: 38rem;
  }

	form {
		display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
	}

	img {
		max-height: 30px;
		margin-left: 1rem;
	}

	label {
		font-weight: 600;
		margin-right: 1rem;
	}

	.container {
		display: flex;
		align-items: center;
		max-width: 47rem;
	}
</style>

<div class="container">
	<form on:submit|preventDefault={handleSubmit}>
		<label>{label}</label>
		<select value={selected} on:change="{() => answer = ''}">
			{#each data as item}
				<option value={item}>
					{item.text}
				</option>
			{/each}
		</select>
	</form>
	{#if img}
		<img src={img}/>
	{/if}
</div>

