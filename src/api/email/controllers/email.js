'use strict';

/**
 * email controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// Definisci una funzione asincrona per l'esecuzione del codice con 'await'
const sendEmail = async (ctx) => {
    const { name, email, message } = ctx.request.body;
  await strapi.plugins['email'].services.email.send({
    to: 'valid email address',
    from: 'your verified email address', // e.g. single sender verification in SendGrid
    cc: 'valid email address',
    bcc: 'valid email address',
    replyTo: 'valid email address',
    subject: 'The Strapi Email plugin worked successfully',
    text: 'Hello world!',
    html: 'Hello world!',
  });
};

module.exports = createCoreController('api::email.email');

