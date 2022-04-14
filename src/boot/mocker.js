import { boot } from "quasar/wrappers";

export default boot ( () => {
    const { worker } = require('../mocks/browser')
    worker.start({ onUnhandledRequest: 'bypass' })
});
