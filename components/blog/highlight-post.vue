<template>
  <nuxt-link to="/blog/slug" :class="style.container">
    <img
        src="https://images.unsplash.com/photo-1644072980074-2798e1db8d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        alt=""
        :class="style.image"
    />
    <div :class="style.content">
      <o-text :class="style.tag">CATEGORIA</o-text>
      <o-text tag="h3" type="tertiary" :class="style.title">Título do post</o-text>
      <o-text :class="style.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</o-text>
    </div>
  </nuxt-link>
</template>
<script>
import OText from "@/components/o-text";
export default {
  name: "OHighlightPost",
  components: {OText},
}
</script>
<style module="style">
.container {
  height: 313px;
  width: 100%;
  border-radius: 35px;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all .1s ease;
}
.image {
  height: 120px;
  object-fit: cover;
  object-position: center;
}
.content {
  flex: 1;
  padding: 12px 27px;
}
.tag {
  color: var(--text-gray);
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 22px;
}
.title {
  font-size: 16px;
}
.text {
  font-size: 12px;
  line-height: 2;
  font-weight: 200;
}
.container:hover {
  transform: scale(1.03);
}
</style>