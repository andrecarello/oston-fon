<template>
  <component
    :is="type"
    :to="to ? to : null"
    :href="href ? href : null"
  >
    <slot />
  </component>
</template>
<script>
export default {
  name: "OButton",
  computed: {
    type() {
      if ( this.to ) return "nuxt-link"
      else if ( this.href ) return "a"
      return "button"
    },
  },
  props: {
    to: { type: String },
    href: { type: String },
  }
}
</script>