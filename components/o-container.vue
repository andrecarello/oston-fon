<template>
  <div :class="style.container"><slot /></div>
</template>
<script>
export default {
  name: "OContainer",
  props: {
    center: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style module="style">
.container {
  --container-width: 256px;

  max-width: var(--container-width);
  width: 100%;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .container {
    --container-width: 842px;
  }
}
</style>
