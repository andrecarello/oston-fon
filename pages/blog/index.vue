<template>
  <div :class="style.page">
    <div :class="style.header">
      <o-text tag="h1" type="primary">Blog Fique On</o-text>
      <o-text alignment="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Maecenas ac vulputate lorem
      </o-text>

      <div :class="style.categories">
        <o-button
            v-for="category in categories"
            :key="category.id"
            :class="[
              style.category,
              category.id === active_category ? style.category_active : null
            ]"
            @click.native="active_category = category.id"
        >
          <div :class="style.category_icon">
            <component :is="category.icon" />
          </div>
          <o-text :class="style.category_title">{{ category.title }}</o-text>
        </o-button>
      </div>
    </div>

    <o-highlight-posts title="Matérias em Destaque" background="/blog-home-background.jpeg">
      <o-highlight-post v-for="i in 3" :key="i" />
    </o-highlight-posts>

    <o-container>
      <o-posts
        title="Compare!"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac vulputate lorem"
        @click="getMorePosts()"
      >
        <o-post v-for="i in 4" :key="i" />
      </o-posts>
    </o-container>

    <o-container>
      <o-posts
          title="Compare!"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac vulputate lorem"
          @click="getMorePosts()"
      >
        <o-post v-for="i in 4" :key="i" />
      </o-posts>
    </o-container>

    <o-container>
      <o-posts
          title="Compare!"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac vulputate lorem"
          @click="getMorePosts()"
      >
        <o-post v-for="i in 4" :key="i" />
      </o-posts>
    </o-container>
  </div>
</template>

<script>
import CompareIcon from "~/components/icons/compare.icon";
import LampIcon from "~/components/icons/lamp.icon";
import CanceledIcon from "~/components/icons/canceled.icon";
import TechnologyIcon from "~/components/icons/technology.icon";
import PortabilityIcon from "~/components/icons/portability.icon";

import OText from "~/components/o-text";
import OButton from "~/components/o-button";
import OHighlightPosts from "~/components/blog/highlight-posts";
import OHighlightPost from "@/components/blog/highlight-post";
import OPosts from "@/components/blog/posts";
import OPost from "@/components/blog/post";
import OContainer from "@/components/o-container";

export default {
  name: "Blog",
  components: {
    OContainer,
    OPost,
    OPosts,
    OHighlightPost,
    OHighlightPosts,
    LampIcon,
    CompareIcon,
    PortabilityIcon,
    CanceledIcon,
    TechnologyIcon,
    OButton,
    OText
  },
  data: () => ({
    active_category: 1,
    categories: [
      { id: 1, title: "Em destaque", icon: "lamp-icon" },
      { id: 2, title: "Compare", icon: "compare-icon" },
      { id: 3, title: "Portabilidade", icon: "portability-icon" },
      { id: 4, title: "Tecnologia", icon: "technology-icon" },
      { id: 5, title: "Cancelamento", icon: "canceled-icon" },
    ]
  }),
  methods: {
    getMorePosts: () => window.alert('clicou me')
  }
}
</script>
<style module="style">
.page {}
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--bg-gray-100);
}

.heading {}
.subheading {}
.category {}

@media (min-width: 1024px) {
  .header {
    height: 317px;
  }
  .heading {
    font-size: 34px;
    line-height: 42px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 10px;
  }
  .subheading {
    font-size: 12px;
    line-height: 24px;
    text-align: center;
  }

  .categories {
    display: flex;
    justify-content: space-between;
    max-width: 450px;
    width: 100%;
    margin-top: 33px;
  }

  .category {
    border: none;
    background-color: transparent;
  }

  .category_icon {
    position: relative;
    height: 46px;
    width: 46px;
    border-radius: 46px;
    margin: 0 auto 18px;
    background-color: var(--bg-default);

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--bg-default);
  }

  .category_icon:after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 100%;
    border: 2px solid var(--bg-gray);
    transition: all .2s ease;
  }

  .category_active .category_icon {
    border-color: var(--bg-primary);
  }

  .category:focus .category_icon:after,
  .category:hover .category_icon:after,
  .category_active .category_icon:after {
    top: -7px;
    left: -7px;
    right: -7px;
    bottom: -7px;
    border-color: var(--bg-primary);
  }

  .category_title {
    font-size: 10px;
    text-align: center;
  }
}
</style>
