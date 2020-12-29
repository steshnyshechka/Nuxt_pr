<template>
  <div class="carousel">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000; color: black"
      fade
      controls
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="Обучение"
        img-src="https://picsum.photos/1024/480/?image=4"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Продвижение"
        img-src="https://i.picsum.photos/id/402/1024/480.jpg?hmac=Qxw-bWDujDp04SoHEvDbF9bTnzWzjN7T5xsTwfmYkys"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Успех"
        img-src="https://picsum.photos/1024/480/?image=7"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";
export default {
  name: "TheCarousel",
  components: { BCarouselSlide, BCarousel },
};
</script>
