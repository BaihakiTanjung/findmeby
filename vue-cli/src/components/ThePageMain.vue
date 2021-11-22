<template>
  <div class="page-main">
    <v-card class="page_main__card pa-5" color="white">
      <div class="d-flex justify-center py-5">
        <h4 class="text-h5 font-weight-bold mr-10">Result : <span>0</span></h4>
        <h4 class="text-h5 font-weight-bold">Page : <span>0</span></h4>
      </div>
      <div>
        <slot></slot>
      </div>
    </v-card>
  </div>
</template>