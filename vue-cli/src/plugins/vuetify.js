import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  options: {
    customProperties: true,
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#E9A6A6",
        secondary: colors.grey.darken1,
      },
      dark: {
        primary: "#E9A6A6",
        secondary: "#3F3351",
      },
    },
  },
});
