<template>
  <div class="theme-toggle">
    <div class="bounce">
      <v-btn
        @click="toggleTheme"
        class="theme-toggle__btn mx-2 bounce"
        fab
        color="primary"
      >
        <v-icon dark> mdi-theme-light-dark </v-icon>
      </v-btn>
    </div>
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
  right: 15px;
  top: 15px;
  z-index: 9999;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
