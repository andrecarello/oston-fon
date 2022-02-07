<template>
  <div :class="style.container">
    <nuxt-img
        :class="style.background"
        preload
        fit="cover"
        :src="background"
        sizes="lg:100vw"
    />

    <div :class="style.content">
      <o-text tag="h3" type="primary" variant="secondary" alignment="center">{{ title }}</o-text>

      <o-container :class="style.inner_content">
        <slot />
      </o-container>
    </div>
  </div>
</template>

<script>
import OText from "@/components/o-text";
import OContainer from "@/components/o-container";

export default {
  name: "OHighlightPosts",
  components: {
    OContainer,
    OText
  },
  props: {
    title: { type: String, default: "" },
    background: { type: String, default: "/blog-home-background.jpeg"}
  }
}
</script>
<style module="style">
.container {
  position: relative;
  height: 477px;
  overflow: hidden;
  padding: 35px 0;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  object-fit: cover;
  object-position: center;
}
.content {
  position: relative;
  z-index: 2;
}
.inner_content {
  position: relative;
  z-index: 3;
  padding: 35px 0 0;

  display: flex;
  gap: 25px;
}
</style>