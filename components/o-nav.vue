<template>
  <nav :class="style.nav">
    <o-container :class="style.nav_content">
      <slot name="brand" />

      <o-button :class="style.nav_togglr">
        <span v-for="i in 2" :key="i" />
      </o-button>
      <div :class="style.nav_links">
        <o-button :class="style.nav_search">
          <search-icon />
        </o-button>
        <o-button to="/" :class="style.nav_link">serviços</o-button>
        <o-button to="/" :class="style.nav_link">vantagens</o-button>
        <o-button to="/" :class="style.nav_link">ferramentas</o-button>
        <o-button :class="style.nav_login">
          <user-icon />
        </o-button>
      </div>
    </o-container>
  </nav>
</template>
<script>

import OContainer from "~/components/o-container";
import OSpacer from "~/components/o-spacer";
import OButton from "~/components/o-button";
import SearchIcon from "~/components/icons/search.icon";
import UserIcon from "~/components/icons/user.icon";

export default {
  name: "ONav",
  components: {
    UserIcon,
    SearchIcon,
    OButton,
    OSpacer,
    OContainer,
  }
}
</script>

<style module="style">
.nav {
  background-color: var(--bg-default);
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_togglr {
  height: 37px;
  width: 37px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  touch-action: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.nav_togglr > span {
  display: block;
  height: 3px;
  background-color: var(--bg-primary);
  border-radius: 10px;
}

.nav_togglr > span:first-child {
  width: 19px;
}
.nav_togglr > span:last-child {
  width: 14px;
  margin-right: 5px;
}

.nav_links {
  display: none;
}
.nav_link {}
.nav_search {}
.nav_login {}

.nav_search,
.nav_login {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .nav {}
  .nav_content {}
  .nav_togglr {
    display: none
  }
  .nav_links {
    display: flex;
    gap: 28px;
  }
  .nav_link {
    color: var(--text-secondary);
    font-size: 12px;
    font-weight: 800;
  }
}
</style>