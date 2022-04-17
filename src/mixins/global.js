import { useQuasar } from "quasar";

export default {
  data() {
    return {
      $q: useQuasar(),
    };
  },
  computed: {
    $isPhone() {
      return (
        this.$q.platform.is.mobile !== undefined && this.$q.platform.is.mobile
      );
    },
  },
};
