<template>
  <div class="search-form d-flex justify-center">
    <div class="d-flex p-5">
      <div class="search-form__input">
        <v-text-field   
          placeholder="url youtube ?"
          solo
          flat
          rounded
        ></v-text-field>
      </div>
      <v-btn class="mx-5" color="primary" elevation="2" x-medium rounded
        >Clear</v-btn
      >
      <div class="search-form__input">
        <v-text-field
          placeholder="search you want ?"
          solo
          flat
          rounded
        ></v-text-field>
      </div>
    </div>
  </div>
</template>