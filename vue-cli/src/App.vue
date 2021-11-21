<template>
  <v-app>
    <!-- Toggle Theme -->
    <ToggleTheme />
    <!-- End Toggle Theme -->
  </v-app>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme.vue";
export default {
  name: "App",
  data: () => ({}),
  components: { ToggleTheme },
};
</script>
