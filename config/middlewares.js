module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      origin: '*',
      methods: 'GET, POST, PUT, DELETE, OPTIONS',
      headers: 'Content-Type, Authorization',
    },
  },
  // {
  //   name: "strapi::body",
  //   config: {
  //     formLimit: "256mb", // modifica il limite del corpo del form
  //     jsonLimit: "256mb", // modifica il limite del corpo JSON
  //     textLimit: "256mb", // modifica il limite del corpo di testo
  //     formidable: {
  //       maxFileSize: 250 * 1024 * 1024, // modifica qui il limite della dimensione del file caricato
  //     },
  //   },
  // },
  
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
