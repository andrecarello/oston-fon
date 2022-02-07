<template>
  <div class="font-poppins">
    <o-nav>
      <template #brand>
        <component :is="icons.nav_brand" />
      </template>
    </o-nav>
    <nuxt />
    <o-footer>
      <template #brand>
        <component :is="icons.footer_brand" />
      </template>
    </o-footer>
  </div>
</template>
<script>

import FiqueOnInlineBrand from "~/components/icons/fiqueoninline.brand";
import FiqueOnBrand from "~/components/icons/fiqueon.brand";

import OFooter from "~/components/o-footer"
import ONav from "~/components/o-nav";

export default {
  name: "LayoutDefault",
  components: {
    FiqueOnInlineBrand,
    FiqueOnBrand,
    OFooter,
    ONav,
  },
  data() {
    return {
      icons: {
        nav_brand: 'fique-on-brand',
        footer_brand: 'fique-on-brand'
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      let width = window.innerWidth;
      this.icons.nav_brand = width > 1023 ? 'fique-on-inline-brand' : 'fique-on-brand'
      this.icons.footer_brand = width < 1024 ? 'fique-on-inline-brand' : 'fique-on-brand'
    }
  }
}
</script>
<style>
:root {
  --color-black: #000000;
  --color-green: #4DE500;
  --color-white: #FFFFFF;
  --color-gray-100: #E5E5E5;
  --color-gray: #C4C4C4;

  --bg-default: var(--color-black);
  --bg-primary: var(--color-green);
  --bg-secondary: var(--color-white);
  --bg-gray-100: var(--color-gray-100);
  --bg-gray: var(--color-gray);

  --text-default: var(--color-black);
  --text-primary: var(--color-green);
  --text-secondary: var(--color-white);
  --text-gray-100: var(--color-gray-100);
  --text-gray: var(--color-gray);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch!important;

  font-family: Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.15;

  -webkit-text-size-adjust: 100%;
}

::before,
::after {
  box-sizing: border-box;
}

html {
  -moz-tab-size: 4;
  tab-size: 4;
}

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

hr {
  height: 0;
  color: inherit;
}

abbr[title] {
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 14px;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
select {
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

:-moz-focusring {
  outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
  box-shadow: none;
}

legend {
  padding: 0;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}
</style>