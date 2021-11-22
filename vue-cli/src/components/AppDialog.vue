<template>
  <v-dialog
    class="dialog"
    v-model="show"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template>
      <v-card>
        <v-toolbar class="text-center" color="primary" dark>Video</v-toolbar>

        <div class="dialog-video pa-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r9-v34Cp9GI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <v-card-actions class="justify-end">
          <v-btn text color="primary" @click.stop="show = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  props: ["visible"],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>