// APP CONFIG - General Project Configuration
const env = process.env;

export const app = {
  baseURl: env.VUE_APP_URL,
  assetURL: env.VUE_APP_ASSET,
  name: env.VUE_APP_NAME,
  logo: require("@/assets/images/logo/logo.png"),
  locale: "_locale",
};
