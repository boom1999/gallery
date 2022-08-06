<template>
  <div>
    <Gallery
      v-if="galleryImageURL"
      oncontextmenu="return false;"
      :imageURL="galleryImageURL"
      :imageDesc="galleryImageDesc"
      :badgeNames="badges"
      :location="location"
      :downloadURL="downloadURL"
      @click.native="
        galleryImageURL = null
        galleryImageDesc = null
        badges = null
        location = undefined
        downloadURL = undefined
      "
    ></Gallery>
    <div class="container-xxl">
      <div class="page">
        <div class="row mt-5 gy-2">
          <div class="col-xs-12 col-md-9">
            <router-link to="/">
              <h1 class="site-name d-inline-block">Heisenberg's Photo Gallery</h1>
            </router-link>
          </div>
          <div class="col-xs-12 col-md-3 d-flex flex-row-reverse align-items-center">
            <a class="nav-item" href="https://lingzhicheng.cn" title="Home" target="_blank">Home</a>
            <a class="nav-item" href="https://weibo.com/u/5983398006" title="Weibo" target="_blank">Weibo</a>
            <a
              class="nav-item"
              href="https://www.instagram.com/zhichengling66/"
              title="Instagram"
              target="_blank"
              >Instagram</a
            >
          </div>
        </div>
        <div v-for="(section, index) in sections" :key="index">
          <div class="row">
            <div class="col-12 d-flex justify-content-end mt-5 mb-3">
              <h2 class="section-title">{{ section.title.replace(/=/g, ' ') }}</h2>
            </div>
          </div>
          <div class="row g-3">
            <div
              class="col-xs-12 col-sm-6 col-lg-4 col-xxl-3"
              oncontextmenu="return false;"
              v-for="(image, index) in section.images"
              :key="index"
              @click="clickImage(image)"
            >
              <Frame :image="image" />
            </div>
          </div>
        </div>
        <footer class="row my-4">
          <div class="col text-center">
            &copy;&nbsp;{{ new Date().getFullYear() }}
            <a href="mailto:lingzhicheng66@gmail.com" title="Gmail">Zhicheng Ling</a>
            |
            <a href="https://github.com/boom1999/gallery" title="GitHub" target="_blank">GitHub</a>
          </div>
          <div class="cow text-center">
            <a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备2020044847号-1</a>
            |
            <BuSuanZi></BuSuanZi>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
import Gallery from '@/components/Gallery.vue'
import Frame from '@/components/Frame.vue'
import { Section, Image } from '@/types'
import BuSuanZi from './BuSuanZi.vue'

@Component({
  components: {
    Frame,
    Gallery,
    BuSuanZi
  },
})
export default class Home extends Vue {
  sections: Section[] = []
  galleryImageURL: string | null = null
  galleryImageDesc: string | null = null
  badges: string[] | null = null
  location?: string
  downloadURL?: string

  created() {
    axios.get('./photos.json').then((response) => {
      this.sections = response.data
    })
  }

  clickImage(image: Image) {
    this.galleryImageURL = image.url
    this.galleryImageDesc = (image.desc ?? '').replace(/=/g, ' ')
    this.badges = image.badges || null
    this.location = image.location
    this.downloadURL = image.downloadURL
  }
}
</script>
<style scoped>
.site-name {
  font-family: 'Gill Sans', sans-serif;
  font-size: 2.0rem;
  font-weight: 400;
  padding: 4px 6px;
  color: #000;
  box-shadow: 15px 15px 20px #ccc
}
.page {
  margin: 0 32px;
}
.nav {
  margin: 40px 0;
}
.nav-item {
  margin-left: 12px;
  font-size: 1.2rem;
}
.nav-item:hover {
  text-decoration: none;
}
.section-title {
  text-align: right;
}
</style>
