import { boot } from "quasar/wrappers";

export default boot ( () => {
    if (process.env.NODE_ENV === 'development') {
        const { worker } = require('../mocks/browser')
        worker.start({ onUnhandledRequest: 'bypass' })
    }
});
