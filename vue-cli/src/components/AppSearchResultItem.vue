<template>
  <v-card class="mx-auto ma-3" color="#fff" dark>
    <div class="d-flex justify-space-between pa-5">
      <h4 class="text-h5" v-html="resultText"></h4>

      <!-- Dialog -->
      <app-dialog :resultStart="resultStart"></app-dialog>
      <!-- End Dialog -->
    </div>
  </v-card>
</template>
<script>
import AppDialog from "./AppDialog.vue";

export default {
  components: {
    AppDialog,
  },
  props: {
    resultStart: {
      type: Number,
      default: 0,
    },
    resultText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
};
</script>
