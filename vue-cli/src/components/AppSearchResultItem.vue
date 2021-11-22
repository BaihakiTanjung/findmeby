<template>
  <v-card class="mx-auto ma-3" color="#fff" dark>
    <div class="d-flex justify-space-between pa-5">
      <h4 class="text-h5">test</h4>
      <v-btn rounded color="primary" @click.stop="dialog = true">Video</v-btn>

      <!-- Dialog -->
      <app-dialog :visible="dialog" @close="dialog = false"></app-dialog>
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
  data() {
    return {
      dialog: false,
    };
  },
};
</script>