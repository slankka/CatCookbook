<template>
  <ParentLayout>
    <template #page-bottom>
      <footer class="footer">
        Site made by © 2021 😀 <a href="https://slankka.com" >slankka</a>
      </footer>
    </template>
  </ParentLayout>
</template>

<style scoped>
  .footer {
    font-size: 12px;
    padding: .5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
  }
</style>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
export default {
  name: "Layout",
  components: {
    ParentLayout,
  },
};
</script>