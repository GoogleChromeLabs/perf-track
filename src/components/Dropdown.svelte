<script>
	let questions = [
		{ id: 1, text: `All React sites` },
		{ id: 2, text: `Only React sites built with Next.js` },
		{ id: 3, text: `Only React sites built with Gatsby` },
		{ id: 4, text: `Only React sites built with Create React App` }
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<style>
  select {
    margin: 0;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
	<select value={selected} on:change="{() => answer = ''}">
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>
	<!-- <button disabled={!answer} type=submit>
		Submit
	</button> -->
</form>
