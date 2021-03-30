export default {
  
  mode: "universal",
  
  target: "static",
  
  head: {
    title: "foodapp2",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Demo of Nuxt and Vue"
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@600&display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/main.scss"],
  
  plugins: ["~/plugins/getfood.server.js", "~/plugins/vuelidate.js"],
  
  components: true,
  
  buildModules: [],
  
  modules: [],
  
  build: {}
};
