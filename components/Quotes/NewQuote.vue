<template>
  <div>
    <form>
      <div class="row justify-content-center form-group">
        <b-input
          class="form-control"
          rows="3"
          v-model="newQuote.newTitle"
          placeholder="Напишите что-то"
        />
      </div>
      <div class="row justify-content-center form-group">
        <b-button @click="createNew">Добавить</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NewQuote",
  data: function () {
    return {
      newQuote: { newTitle: "", newId: 0 },
      maxQuotes: 10,
      showTop: false,
      showEmpty: false,
    };
  },
  methods: {
    ...mapMutations({
      ADD_QUOTE: "quotes/ADD_QUOTE",
    }),
    createNew() {
      if (this.newQuote.newTitle.length < 3) {
        this.$bvToast.toast("Необходимо написать минимум три символа", {
          title: "Ошибка",
          solid: true,
        });
      } else {
        this.ADD_QUOTE(this.newQuote);
        this.newQuote.newId++;
        this.newQuote.newTitle = "";
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  width: 400px;
  height: 50px;
}
</style>