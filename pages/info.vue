<template>
  <div>
    <TheCarousel />
    <Tasks />
    <TheFields />
    <Images class="images" />
  </div>
</template>

<script>
import Images from "../components/Galery/Images";
import TheCarousel from "../components/TheCarousel";
import Tasks from "../components/Quotes/Tasks";
import TheFields from "../components/TheFields";

export default {
  name: "Info",
  components: { Images, TheCarousel, Tasks, TheFields },
};
</script>

<style scoped>
.images {
  margin-bottom: 50px;
}
</style>