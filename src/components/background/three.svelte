<script>
  import { onMount } from "svelte";
  import { setUpScene } from "./threeComponent";

  let bg;

  onMount(() => {
    setUpScene(bg);
  });
</script>

<main>
  <canvas bind:this={bg} />
</main>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
