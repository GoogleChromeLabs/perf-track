<script>
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	
	export let img = false;
	export let label;
	export let data;
	export let framework;
	export let selectedFramework = framework;

  import frameworkInfo from "../utils/framework-info.json";

	let selected;

	let answer = '';

	let currFramework = frameworkInfo[framework];
	let selectedFrameworkVariation = (selected) => frameworkInfo[framework].variations[selected.framework];

	const changeSelected = () => selectedFramework = selected.framework;
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
	<form>
		<label>{label}</label>
		<select bind:value={selected} on:change={changeSelected}>
			{#each data as item}
				<option value={item}>
						{item.text}
				</option>
			{/each}
		</select>
	</form>
	{#if img && selected}
		{#if frameworkInfo[selected.framework]}
			<img src={currFramework.imgSrc}/>
		{:else if selectedFrameworkVariation(selected)}
				{#if img && selectedFrameworkVariation.standalone}
				<img src={selectedFrameworkVariation(selected).imgSrc}/>
				{:else }
				<span class="combined-images">
					<img src={currFramework.imgSrc}/> 
					<span class="divider">+</span>
					<img src={selectedFrameworkVariation(selected).imgSrc}/>
				</span>
			{/if}
		{/if}
	{/if}
</div>

