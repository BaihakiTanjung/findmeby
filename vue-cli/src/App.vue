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
        <div class="search-form d-flex justify-center">
          <div class="d-flex p-5">
            <div class="search-form__input">
              <app-text-field
                v-model="url"
                placeholder="url youtube ?"
              ></app-text-field>
            </div>
            <app-button @click="clear">clear</app-button>
            <div class="search-form__input">
              <app-text-field
                v-model="keyword"
                placeholder="search you want ?"
                hint="At least 3 characters"
              ></app-text-field>
            </div>
          </div>
        </div>
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

          <div class="d-flex justify-center my-5">
            <app-button @click="navigate('first')">First</app-button>
            <app-button @click="navigate('prev')">Prev</app-button>
            <app-button @click="navigate('next')">Next</app-button>
            <app-button @click="navigate('last')">Last</app-button>
          </div>
        </ThePageMain>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import AppButtonTheme from "@/components/AppButtonTheme.vue";
import ThePageHead from "@/components/ThePageHead.vue";
import ThePageMain from "@/components/ThePageMain.vue";
import AppTextField from "@/components/AppTextField.vue";
import AppButton from "@/components/AppButton.vue";

import { pDebounce } from "./utils";

export default {
  name: "App",
  data: () => ({
    url: "",
    keyword: "",
    isLoading: false,
  }),
  components: {
    AppButtonTheme,
    ThePageHead,
    ThePageMain,
    AppTextField,
    AppButton,
  },
  methods: {
    async search(keyword, url, pagination) {
      try {
        this.resetData();
        this.$store.commit("SET_LOADING", true);
        const response = await fetch(
          pagination
            ? pagination
            : `https://cari-teks-video-api.vercel.app/api/search?&q=${keyword}&url=${encodeURIComponent(
                url
              )}`
        ).then((_) => (_.ok ? _.json() : []));

        console.log(response);
        if (response.data !== null) {
          this.$store.commit("SET_RESULT_LIST", { resultList: response.data });
          this.$store.commit("SET_PAGINATION", {
            first: response.first,
            last: response.last,
            prev: response.prev,
            next: response.next,
            total: response.total,
            page: response.page,
          });

          this.$store.commit("SET_META", { meta: response.meta });
          this.$store.commit("SET_ERROR", { error: "" });

          await this.$router
            .push({
              name: "SearchResultPage",
              params: { page: response.page },
            })
            .catch(() => {});
        } else {
          this.$store.commit("SET_ERROR", { error: response.message });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          this.$store.commit("SET_LOADING", false);
        }, 1000);
      }
    },
    async navigate(type) {
      if (!this.$store.state.pagination[type]) {
        return;
      }
      await this.search(
        this.keyword,
        this.url,
        this.$store.state.pagination[type]
      );
    },
    async clear() {
      this.keyword = "";
      this.resetData();
      await this.$router.replace("/");
    },
    resetData() {
      this.$store.commit("SET_RESULT_LIST", { resultList: [] });
      this.$store.commit("SET_META", { meta: {} });
      this.$store.commit("RESET_PAGINATION");
    },
  },
  watch: {
    keyword: pDebounce(async function keywordHandler(keyword) {
      if (keyword && keyword.length >= 3) {
        await this.search(keyword, this.url);
      } else {
        this.resetData();
      }
    }, 250),
    url(val) {
      this.$store.commit("SET_URL", { val });
    },
  },
};
</script>
