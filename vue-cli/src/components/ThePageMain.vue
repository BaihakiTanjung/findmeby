<template>
  <div class="page-main">
    <v-card class="page_main__card pa-5" color="white">
      <div class="d-flex justify-center py-5">
        <h4 class="text-h5 font-weight-bold mr-10">
          Result : <span>{{ totalResult }}</span>
        </h4>
        <h4 class="text-h5 font-weight-bold">
          Page : <span>{{ currentPage }}</span>
        </h4>
      </div>
      <div>
        <slot></slot>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  computed: {
    totalResult() {
      return this.$store.state.resultList.length;
    },
    currentPage() {
      return this.$store.state.pagination.page;
    },
  },
};
</script>
