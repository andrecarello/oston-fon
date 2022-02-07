<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99935 7.99967C9.8403 7.99967 11.3327 6.50729 11.3327 4.66634C11.3327 2.82539 9.8403 1.33301 7.99935 1.33301C6.1584 1.33301 4.66602 2.82539 4.66602 4.66634C4.66602 6.50729 6.1584 7.99967 7.99935 7.99967Z" :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 14.667C2 11.3552 4.68817 8.66699 8 8.66699C11.3118 8.66699 14 11.3552 14 14.667" :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

</template>

<script>
export default {
  name: "UserIcon",
  props: {
    color: {
      type: String,
      default: "#4DE500"
    }
  }
}
</script>