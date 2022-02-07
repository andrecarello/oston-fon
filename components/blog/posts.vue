<template>
  <div :class="style.container">
    <div :class="style.content">
      <o-text tag="h3" type="primary" alignment="center">{{ title }}</o-text>
      <o-text alignment="center" :class="style.subtitle">{{ subtitle }}</o-text>

      <div :class="style.inner_content">
        <slot />
      </div>

      <div :class="style.button" @click="$emit('click')">
        Mais sobre “Comparação de Planos”
      </div>
    </div>
  </div>
</template>

<script>
import OText from "@/components/o-text";

export default {
  name: "OPosts",
  components: {
    OText
  },
  props: {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" }
  }
}
</script>
<style module="style">
.container {
  min-height: 477px;
  overflow: hidden;
  padding: 35px 0;
  border: 1px solid var(--bg-gray);
  background-color: var(--bg-secondary);
  border-radius: 35px;
  margin: 20px auto;
}
.content {
  padding: 0 20px;
}
.inner_content {
  padding: 35px 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.subtitle {
  font-size: 12px;
  line-height: 2;
  margin-top: 10px;
  font-weight: 200;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-secondary);
  border-radius: 50px;
  border: 1px solid var(--bg-default);
  margin: 40px auto 0;
  cursor: pointer;

  width: 50vw;
  max-width: 347px;
  height: 37px;

  font-size: 16px;
  line-height: 1.8;
  font-weight: 200;

  transition: all .1s ease;
}
.button:hover {
  background-color: var(--bg-default);
  color: var(--text-primary);
}
</style>