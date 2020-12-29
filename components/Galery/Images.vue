<template>
  <div class="container">
    <div class="row justify-content-center">
      <h3>Наша галерея фотографий:</h3>
    </div>
    <div class="row justify-content-center">
      <b-input-group @keydown.enter.prevent="search" class="search">
        <b-form-input v-model="tag"></b-form-input>
        <b-input-group-append>
          <b-button type="submit" class="go-button" @click.prevent="search">
            Найти
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div v-if="isOpen" class="wrapper">
      <div v-if="loading">
        <TheSpinner />
      </div>
      <div v-else>
        <div class="d-flex justify-content-center button-close">
          <b-button v-if="canClose" @click.prevent="onClick">
            Скрыть фотографии
          </b-button>
        </div>
        <ul class="image-card-grid">
          <image-card
            v-for="image in cleanImages"
            :key="image.id"
            :image="image"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import flickr from "../../flickr.js";
import ImageCard from "./ImageCard";
import config from "../../nuxt.config.js";
import axios from "axios";
import TheSpinner from "../TheSpinner";

export default {
  name: "Images",
  components: {
    ImageCard,
    TheSpinner,
  },
  props: "",
  data() {
    return {
      canClose: false,
      loading: false,
      tag: "",
      images: [],
      isOpen: true,
    };
  },
  computed: {
    cleanImages() {
      return this.images.filter((image) => image.url_n);
    },
  },
  methods: {
    async search() {
      this.loading = true;
      try {
        await this.fetchImages();
        this.loading = false;
        this.canClose = true;
        this.isOpen = true;
      } catch (e) {
        console.log(e);
        this.$router.push({ path: "/info" });
      }
    },
    fetchImages() {
      return flickr("photos.search", {
        tags: this.tag,
        extras: "url_n, owner_name, date_taken, views",
        page: 1,
        per_page: 9,
      })
        .then((response) => {
          this.images = response.data.photos.photo;
          console.log(response.data.photos);
        })
        .catch((e) => {
          console.log(e);
          this.$router.push({ path: "/info" });
        });
    },
    onClick() {
      this.tag = "";
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
h3 {
  margin-top: 30px;
}
.search {
  width: 500px;
  margin-top: 20px;
}
.go-button {
  margin-left: 10px;
}
.go-button:hover,
.button-close:hover {
  opacity: 30%;
}
.button-close {
  margin-top: 20px;
}
.image-card-grid {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.wrapper {
  margin: 0 auto;
  max-width: 800px;
  @media only screen and (max-width: 799px) {
    max-width: 100%;
    margin: 0 1.5rem;
  }
}
</style>