<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'

@Component({
  components: {},
})
export default class App extends Vue {}
</script>
<style>
body {
  margin: 0;
  font-weight: 200;
  font-family: 'Solway', sans-serif;
  background-color: rgba(255, 255, 255);
}
a {
  font-weight: 400;
  text-decoration: none;
  color: #000;
}
a:hover {
  text-decoration: none;
  color: rgba(51, 51, 51, 0.75);
}
::selection {
  background: #bbb;
}
</style>
