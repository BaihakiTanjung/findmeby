<template>
  <div class="theme-toggle">
    <v-btn
      @click="toggleTheme"
      class="theme-toggle__btn mx-2"
      fab
      color="primary"
    >
      <v-icon dark> mdi-theme-light-dark </v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
<style lang="scss" scoped>
.theme-toggle {
  position: fixed;
  right: 25px;
  top: 25px;
  z-index: 9999;
}
</style>
