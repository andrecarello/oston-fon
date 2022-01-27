<template>
  <component
    :is="tag"
  ><slot /></component>
</template>
<script>
export default {
  name: "OText",
  props: {
    tag: { type: String, default: "p" }
  }
}
</script>