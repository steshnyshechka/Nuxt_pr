<template>
  <div class="container">
    <text-instruction />
    <new-quote />
    <quote-grid />
  </div>
</template>

<script>
import QuoteGrid from "./QuoteGrid";
import NewQuote from "./NewQuote";
import TextInstruction from "./TextInstruction";
export default {
  name: "Tasks",
  components: {
    QuoteGrid,
    NewQuote,
    TextInstruction,
  },
};
</script>
