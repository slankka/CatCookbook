<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <div class="myFooter">
      <PageEdit />

      <PageNav v-bind="{ sidebarItems }" />

      <slot name="bottom" />
      <footer class="footer">
        Site made by © 2021 😀 <a href="https://slankka.com">slankka</a>
      </footer>
    </div>
  </main>
</template>

<script>
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";
import '@parent-theme/styles/wrapper.styl';

export default {
  name: "Page",
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">

.footer {
  font-size: 12px;
  padding: 0.5rem;
  border-top: 1px solid #eaecef;
  text-align: center;
  margin-top: auto;
}

.page {
  min-height: 100%;
  display: flex !important;
  flex-direction: column;
}

.myFooter {
  margin-top: auto;
}
</style>
