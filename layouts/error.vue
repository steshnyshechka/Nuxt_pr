<template>
  <div class="error-indicator">
    <img src="../static/error.png" alt="error icon" />
    <span class="boom">БУУУУМ!</span>
    <span>Что-то пошло не так</span>
    <span>(но мы всё исправим)</span>
    <router-link :to="{ path: '/' }">можешь вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  layout: "error",
  props: ["error"],
};
</script>

<style lang='scss' scoped>
.error-indicator,
a {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0c0b08;
  text-decoration: none;

  :hover {
    color: #4b4b4b;
  }
}
.error-indicator {
  img {
    width: 100px;
    margin-bottom: 1rem;
  }
  .boom {
    font-size: 1.7rem;
  }
}
</style>