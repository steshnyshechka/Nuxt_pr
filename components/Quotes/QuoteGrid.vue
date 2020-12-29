<template>
  <div class="row">
    <ul class="panel-body">
      <li
        class="quote"
        v-for="quote in quotes"
        @click.prevent="deleteQuote(quote.id)"
        :key="quote.id"
      >
        {{ quote.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "QuoteGrid",
  computed: {
    ...mapGetters({
      quotes: "quotes/quotes",
    }),
  },
  methods: {
    ...mapMutations({
      REMOVE_QUOTE: "quotes/REMOVE_QUOTE",
    }),
    deleteQuote(id) {
      this.REMOVE_QUOTE(id);
    },
  },
};
</script>

<style>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
}
.quote {
  cursor: pointer;
  display: inline;
  padding-left: 50px;
}
.panel-body:first-child {
  padding-left: 0;
}
.quote:hover {
  color: #dadada;
}
</style>