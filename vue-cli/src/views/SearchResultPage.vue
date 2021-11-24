<template>
  <div>
    <app-search-result></app-search-result>
  </div>
</template>
<script>
import AppSearchResult from "@/components/AppSearchResult";
export default {
  components: {
    AppSearchResult,
  },
  async created() {
    if (this.$store.state.resultList.length === 0) {
      await this.$router.replace("/");
    }
  },
};
</script>