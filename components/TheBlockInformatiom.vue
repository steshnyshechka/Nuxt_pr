<template>
  <div>
    <b-jumbotron
      header="Мы думаем о каждом"
      lead="Наша команда поможет осуществить все мечты"
    >
      <p>Если ты готов к изменениям - смело нажимай на кнопку</p>
      <nuxt-link
        data-toggle="tab"
        :to="{ name: 'info' }"
        exact
        class="btn btn-secondary btn-lg justify-content-start"
        >Больше информации</nuxt-link
      >
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: "TheBlockInformation",
};
</script>
