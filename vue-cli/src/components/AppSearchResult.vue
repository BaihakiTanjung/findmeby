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
        <div class="d-flex flex-column justify-center py-5 mx-auto">
          <img
            class="mx-auto"
            src="@/assets/img/not-found.svg"
            alt="keyword"
            srcset=""
            width="250"
            height="250"
          />
          <h6 class="text-h6 text-center mt-5 opacity-75">keyword not found</h6>
        </div>
      </div>
    </div>
    <div v-else-if="$store.state.loading">
      <v-skeleton-loader
        light
        type="list-item-two-line"
        max-width="500"
        max-height="100"
        class="mx-auto"
      ></v-skeleton-loader>

      <v-skeleton-loader
        v-for="index in 4"
        :key="index"
        light
        type="list-item-three-line"
        max-width="true"
      ></v-skeleton-loader>
    </div>
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
