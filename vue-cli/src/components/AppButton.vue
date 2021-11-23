<template>
  <v-btn
    @click="onClick"
    :disabled="disabled"
    class="mx-5"
    color="primary"
    elevation="2"
    rounded
    ><slot></slot
  ></v-btn>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
