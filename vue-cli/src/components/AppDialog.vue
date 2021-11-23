<template>
  <v-dialog
    class="dialog"
    v-model="show"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-5"
        color="primary"
        elevation="2"
        rounded
        @click="onPlay"
        v-bind="attrs"
        v-on="on"
        >Play Video</v-btn
      >
    </template>
    <template>
      <v-card>
        <v-toolbar class="text-center" color="primary" dark
          >Video {{ $store.state.currentResultStart }}
        </v-toolbar>

        <div v-if="$store.state.currentResultStart" class="dialog-video pa-3">
          <iframe
            width="560"
            height="315"
            :src="embedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <v-card-actions class="justify-end">
          <v-btn text color="primary" @click.stop="closeDialog()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  props: ["visible", "resultStart"],
  data() {
    return {
      show: false,
    };
  },
  computed: {
    youtubeId() {
      // RegEx taken from: https://stackoverflow.com/a/6904504
      return /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/gi.exec(
        this.$store.state.url || ""
      );
    },
    embedUrl() {
      return `https://www.youtube.com/embed/${this.youtubeId[1]}?autoplay=1&start=${this.$store.state.currentResultStart}`;
    },
  },
  methods: {
    closeDialog() {
      this.show = false;
      this.$store.commit("SET_CURRENT_RESULT_START", {
        currentResultStart: undefined,
      });
    },
    onPlay() {
      this.$store.commit("SET_CURRENT_RESULT_START", {
        currentResultStart: this.resultStart,
      });
    },
  },
};
</script>
