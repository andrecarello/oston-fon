<template>
  <div :class="style.footer">
    <o-container :class="style.footer_content">

      <div v-if="$slots.brand" :class="style.brand" style="grid-area: brand">
        <slot name="brand" />
      </div>
      <o-text :class="style.heading" style="grid-area: heading">ANUNCIE SEU DESCONTO COM A GENTE!</o-text>

      <div :class="style.column" style="grid-area: links1">
        <o-text :class="style.sub_heading">COBERTURA INTERNET</o-text>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
      </div>

      <div :class="style.column" style="grid-area: links2">
        <o-text :class="style.sub_heading">COBERTURA CELULAR</o-text>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
      </div>

      <div :class="style.column" style="grid-area: links3">
        <o-text :class="style.sub_heading">COBERTURA TELEFONES FIXOS</o-text>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
        <o-button to="/" :class="style.link">Operadora</o-button>
      </div>

      <div :class="style.column" style="grid-area: links4">
        <o-text :class="style.sub_heading">BLOG</o-text>
        <o-button to="/" :class="style.link">compare</o-button>
        <o-button to="/" :class="style.link">portabilidade</o-button>
        <o-button to="/" :class="style.link">cancelamento</o-button>
        <o-button to="/" :class="style.link">segunda via</o-button>
        <o-button to="/" :class="style.link">notícias</o-button>
        <o-button to="/" :class="style.link">dicas de tecnologia</o-button>
      </div>

      <div :class="style.column" style="grid-area: links5">
        <o-text :class="style.sub_heading">QUEM SOMOS</o-text>
        <o-button to="/" :class="style.link">FAQ</o-button>
        <o-button to="/" :class="style.link">imprensa</o-button>
        <o-button to="/" :class="style.link">WhatsApp/Contato</o-button>
        <o-button to="/" :class="style.link">política de privacidade</o-button>
      </div>

      <div :class="style.column" style="grid-area: links6">
        <o-button to="/" :class="style.link">termos de uso</o-button>
        <o-button to="/" :class="style.link">serviços</o-button>
        <o-button to="/" :class="style.link">produtos/benefícios</o-button>
        <o-button to="/" :class="style.link">recarga de celular</o-button>
        <o-button to="/" :class="style.link">ferramentas</o-button>
      </div>

      <div :class="style.socials" style="grid-area: social">
        <o-button href="/">
          <instagram-icon />
        </o-button>
        <o-button href="/">
          <facebook-icon />
        </o-button>
        <o-button href="/">
          <youtube-icon />
        </o-button>
        <o-button href="/">
          <linked-in-icon />
        </o-button>
      </div>
    </o-container>

    <o-container :class="style.footer_address">
      <address :class="style.address" style="grid-area: address">
        LOREM IPSUM | CNPJ: 99.999.999/9999-9 | Inscrição Estadual: 000.000.000.000<br />
        Endereço: R. Lorem Ipsum, 999 Bairro: Lorem Ipsum - São Paulo - SP | CEP: 00000-000
      </address>
    </o-container>
  </div>
</template>
<script>
import OText from "~/components/o-text";
import OButton from "~/components/o-button";
import InstagramIcon from "~/components/icons/instagram.icon";
import FacebookIcon from "~/components/icons/facebook.icon";
import YoutubeIcon from "~/components/icons/youtube.icon";
import LinkedInIcon from "~/components/icons/linkedin.icon";
import OContainer from "~/components/o-container";

export default {
  name: "OFooter",
  components: {
    OContainer,
    LinkedInIcon,
    YoutubeIcon,
    FacebookIcon,
    InstagramIcon,
    OButton,
    OText
  }
}
</script>
<style module="style">

/** Begin footer layout */
/** It used grid layout to adapt mobile and desktop html structure */
.footer {
  background-color: var(--bg-default);
  padding: 35px 0;
}

.footer_content {
  min-height: 200px;
  border-bottom: 1px solid var(--bg-primary);

  display: grid;
  grid-template-areas:
    "brand brand"
    "heading heading"
    "links1 links2"
    "links3 ."
    "links4 ."
    "links5 links6"
    "social social"
  ;
}

.footer_address {
  padding: 25px 0 0;
}

@media (min-width: 1024px) {
  .footer_content {
    grid-template-columns: 130px auto auto auto auto;
    grid-template-areas:
      "brand links1 links2 links3 links4"
      "heading links5 links6 social social"
    ;
  }
  .footer_address {
    display: grid;
    grid-template-columns: 130px auto;
    grid-template-areas: ". address";
  }
}
/** End footer layout */

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 35px;
}

.brand {
  display: block;
  margin: 0 auto 35px;

  grid-area: brand;
}

.heading,
.sub_heading {
  color: var(--text-primary);
  font-size: 10px;
  font-weight: 500;
}

.heading {
  text-decoration: underline;
  text-align: left;
  margin-bottom: 35px;
}

.link,
.text {
  color: var(--text-secondary);
  font-size: 10px;
}

.link {
  cursor: pointer;
}
.link:hover {
  text-decoration: underline;
}

.socials {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px 35px;
}

.address {
  color: var(--text-primary);
  font-size: 9px;
  line-height: 14px;
  font-style: normal;
}

@media (min-width: 1024px) {
  .heading,
  .brand {
    margin-right: 65px;
  }
  .heading {
    text-align: right;
  }
}
</style>