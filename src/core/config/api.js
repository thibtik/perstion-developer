// APP CONFIG - General Project Configuration
const env = process.env

export const api = {

  baseURl: env.VUE_APP_API,
  prefix: env.VUE_APP_API_PREFIX ?? '/api/v1',

  endpoint: {
    locales: "get-locales",
    // menus: "get-menus",
  
    // component: {
    //   counter: "get-counter",
    //   testimonail:'get-testimonial',
    //   chooseUs:'get-choose-us',
    //   service: 'get-service',
    //   serviceDetail: 'get-service-detail',
    // },
   
  }
}
