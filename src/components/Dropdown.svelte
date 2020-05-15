<script>
	export let img = false;
	export let label;
	export let data;
	export let framework;

  import frameworkInfo from "../utils/framework-info.json";

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

	.combined-images {
		display: flex;
		align-items: center;
	}

	.combined-images .divider {
		margin-left: 1rem;
    font-size: 3rem;
	}
</style>

<div class="container">
	<form on:submit|preventDefault={handleSubmit}>
		<label>{label}</label>
		<select bind:value={selected}>
			{#each data as item}
				<option value={item}>
					{item.text}
				</option>
			{/each}
		</select>
	</form>
	{#if img && selected}
		{#if frameworkInfo[selected.text]}
			<img src={frameworkInfo[selected.text].imgSrc}/>
		{:else if frameworkInfo[framework] && frameworkInfo[framework].variations[selected.text]}
				{#if img && frameworkInfo[framework].variations[selected.text].standalone}
				<img src={frameworkInfo[framework].variations[selected.text].imgSrc}/>
				{:else }
				<span class="combined-images">
					<img src={frameworkInfo[framework].imgSrc}/> 
					<span class="divider">+</span>
					<img src={frameworkInfo[framework].variations[selected.text].imgSrc}/>
				</span>
			{/if}
		{/if}
	{/if}
</div>

