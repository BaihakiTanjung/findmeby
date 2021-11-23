<template>
  <div>
    <div v-if="!$store.state.loading">
      <ul
        v-if="$store.state.resultList.length > 0"
        class="list-disc list-inside"
      >
        <app-search-result-item
          v-for="(result, i) in $store.state.resultList"
          :key="i"
          :result-text="result.text"
          :result-start="result.start"
        ></app-search-result-item>
      </ul>

      <div v-else>
        <div class="d-flex justify-center py-5">
          <h6 class="text-h6">keyword not found</h6>
        </div>
      </div>
    </div>
    <v-skeleton-loader
      v-else-if="$store.state.loading"
      v-for="index in 5"
      :key="index"
      light
      type="list-item-three-line"
      max-width="true"
    ></v-skeleton-loader>
  </div>
</template>
<script>
import AppSearchResultItem from "./AppSearchResultItem";
export default {
  components: {
    AppSearchResultItem,
  },
};
</script>
