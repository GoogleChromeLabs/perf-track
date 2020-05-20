
<script>
	export let size = 30;
	export let width;
	export let height;
	export let viewBox;
</script>

<svg width={size || width} height={size || height} viewBox={viewBox}>
  <slot></slot>
</svg>
