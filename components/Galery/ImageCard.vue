<template>
  <li class="image-card">
    <img
      @click.prevent="showMsgOk(image.url_n, image.title)"
      class="image-card__image"
      :src="image.url_n"
      :alt="image.title"
    />
    <div class="image-card__body">
      <p v-if="image.title" class="image-title">{{ image.title }}</p>
      <p v-else class="image-title">Название не найдено</p>
      <p class="image-owner">Автор: {{ image.ownername }}</p>
      <section class="image-date-view-wrapper">
        <p class="image-date">{{ image.datetaken | moment }}</p>
      </section>
    </div>
  </li>
</template>
<script>
import moment from "moment";
export default {
  name: "ImageCard",
  props: ["image"],
  data() {
    return {
      isOpenModal: false,
    };
  },
  filters: {
    moment(date) {
      return moment(date).format("MMMM D, YYYY");
    },
  },
  methods: {
    openImg() {
      this.isOpenModal = true;
    },
    showMsgOk(img, title) {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", { domProps: { innerHTML: title } });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("b-img", {
          props: {
            src: img,
            thumbnail: true,
            center: true,
            fluid: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okTitle: "Закрыть",
        okVariant: "secondary",
        centered: true,
        size: "sm",
      });
    },
  },
};
</script>
<style scoped>
.image-card {
  width: calc(33% - 1rem);
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: white;
  @media only screen and (max-width: 799px) {
    width: calc(50% - 1rem);
  }
  @media only screen and (max-width: 549px) {
    width: 100%;
    margin: 0.5rem 0;
  }
}
.image-card__image {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.image-card__body {
  padding: 0.5rem 1rem 1rem;
}
.image-title {
  font-weight: bold;
  margin: 0;
}
.image-owner {
  margin-top: 0;
  font-size: 0.8rem;
}
.image-title,
.image-owner {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.image-date-view-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image-date,
.image-views {
  margin-bottom: 0;
  font-size: 0.8rem;
}
</style>