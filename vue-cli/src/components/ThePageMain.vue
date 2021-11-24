<template>
  <div class="page-main">
    <v-card class="page_main__card pa-10" color="white">
      <template v-if="!$store.state.loading">
        <div v-if="$store.state.error" class="d-flex justify-center py-5">
          <p class="opacity-75">
            {{ $store.state.error }} / video tidak bisa diakses
          </p>
        </div>
        <div
          v-if="$store.state.resultList.length > 0"
          class="mx-auto text-center"
        >
          <img :src="$store.state.meta.channelLogoUrl" alt="logo" />
          <h2 class="font-weight-bold mt-3">
            {{ $store.state.meta.channelName }}
          </h2>
        </div>

        <div
          v-if="$store.state.resultList.length > 0"
          class="d-flex justify-center py-5"
        >
          <h3 class="font-weight-bold mr-10">
            Result : <span>{{ totalResult }}</span>
          </h3>
          <h3 class="font-weight-bold">
            Page : <span>{{ currentPage }}</span>
          </h3>
        </div>
        <v-divider></v-divider>
      </template>
      <v-skeleton-loader
        v-else-if="$store.state.loading"
        class="mx-auto"
        max-width="100px"
        max-height="100px"
        light
        type="image"
      ></v-skeleton-loader>
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
