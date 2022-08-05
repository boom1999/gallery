<template>
  <div class="frame">
    <img class="frame-photo" :src="`${image.thumbnailURL}`" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Image } from '@/types'

@Component
export default class Frame extends Vue {
  @Prop() private image!: Image
}
</script>

<style scoped>
.frame {
  width: 100%;
  aspect-ratio: 900 / 600;
  padding: 0;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 10px #bbb;
  justify-content: center;
  overflow: hidden;
}
.frame:hover {
  box-shadow: 10px 10px 10px rgb(43, 108, 121, 0.20);
  cursor: pointer;
}
.frame-photo {
  width: 100%;
}
</style>
