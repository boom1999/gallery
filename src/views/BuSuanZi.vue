<template>
  <span id="busuanzi_container_site_pv">
    Views: <span id="busuanzi_value_site_pv"></span>
  </span>
</template>
 
<script lang="ts">
let script: { fetch: () => void; };
export default {
  mounted() {
    script = require("busuanzi.pure.js");
  },
  watch: {
    $route(to: { path: any; }, from: { path: any; }) {
      if (to.path != from.path) {
        script.fetch();
      }
    }
  }
};
</script>