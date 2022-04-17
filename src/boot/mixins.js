import { boot } from "quasar/wrappers";
import Global from "../mixins/global.js";

export default boot(({ app }) => {
  app.mixin(Global);
});
