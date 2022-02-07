<template>
  <component
    :is="tag"
    :class="[
        style['_'+type],
        style['_color-'+variant],
        style['_'+alignment]
    ]"
  ><slot /></component>
</template>
<script>
export default {
  name: "OText",
  props: {
    tag: { type: String, default: "p" },
    type: { type: String, default: "text" },
    variant: { type: String, default: "default" },
    alignment: { type: String, default: "left" }
  }
}
</script>

<style module="style">
._primary {
  font-size: 34px;
  line-height: 1.23;
  font-weight: 800;
}
._sub {
  font-size: 24px;
  line-height: 1.25;
  font-weight: 200;
}
._secondary {
  font-size: 18px;
  line-height: 1.66;
  font-weight: 800;
}
._tertiary {
  font-size: 18px;
  line-height: 1.23;
  font-weight: 800;
}
._h5 {

}
._h6 {

}
._text {
  font-size: 12px;
  line-height: 2.5;
  font-weight: 400;
}

._color-default {
  color: var(--text-default);
}
._color-primary {
  color: var(--text-primary);
}
._color-secondary {
  color: var(--text-secondary);
}

._center { text-align: center }
._left { text-align: left }
._right { text-align: right }
._justify { text-align: justify }
</style>