<template>
  <ul class="list-disc list-inside">
    <app-search-result-item
      v-for="index in 10"
      :key="index"
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