<template>
  <v-text-field
    :placeholder="placeholder"
    solo
    flat
    rounded
    :value="value"
    @input="onInput"
    :hint="hint"
  ></v-text-field>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    hint: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e);
    },
  },
};
</script>
