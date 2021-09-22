<template>
  <ParentLayout>
    <PageSub />
  </ParentLayout>
</template>

<style scoped>

</style>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import PageSub from "@theme/components/Page.vue";
export default {
  name: "Layout",
  components: {
    ParentLayout,
    PageSub,
  },
};
</script>
