<template>
  <v-app>
    <!-- Toggle Theme -->
    <AppButtonTheme />
    <!-- End Toggle Theme -->

    <v-container class="my-15">
      <!-- Page Head -->
      <ThePageHead />
      <!-- End Page Head -->

      <div class="mt-n6">
        <!-- Search Form -->
        <TheSearchForm />
        <!-- End Search Form -->
      </div>
    </v-container>

    <!-- Background Wave -->
    <div class="background-wave" />
    <!-- End Background Wave -->

    <v-container>
      <v-main>
        <ThePageMain>
          <router-view></router-view>
        </ThePageMain>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import AppButtonTheme from "@/components/AppButtonTheme.vue";
import ThePageHead from "@/components/ThePageHead.vue";
import TheSearchForm from "@/components/TheSearchForm.vue";
import ThePageMain from "./components/ThePageMain.vue";
export default {
  name: "App",
  data: () => ({}),
  components: { AppButtonTheme, ThePageHead, TheSearchForm, ThePageMain },
};
</script>
