<template>
  <ul class="list-disc list-inside">
    <app-search-result-item
      v-for="(result, i) in $store.state.resultList"
      :key="i"
      :result-text="result.text"
      :result-start="result.start"
    ></app-search-result-item>
  </ul>
</template>
<script>
import AppSearchResultItem from "./AppSearchResultItem";
export default {
  components: {
    AppSearchResultItem,
  },
};
</script>
