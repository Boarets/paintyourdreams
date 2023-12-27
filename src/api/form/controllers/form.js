'use strict';

/**
 * form controller
 */
const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeEntity } = require('strapi-utils');

module.exports = createCoreController('api::form.form', ({ strapi }) => ({
    async inviaEmail(ctx) {
        try {
            const { name, email, message, lastname, society, telephone, size, date, price, image } = ctx.request.body;

            console.log('Richiesta ricevuta:', { name, email, message, }); // Aggiungi questo console.log

            await strapi.plugins['email'].services.email.send({
                to: 'micheleboaretto59@gmail.com',
                from: 'micheleboaretto59@gmail.com', //e.g. single sender verification in SendGrid
                cc: 'micheleboaretto59@gmail.com',
                bcc: 'micheleboaretto59@gmail.com',
                replyTo: 'micheleboaretto59@gmail.com',
                subject: 'The Strapi Email plugin worked successfully',
                text: 'Hello world!',
                html: 'Hello world!',
            });

            console.log('Email inviata con successo'); // Aggiungi questo console.log

            await strapi.services.forms.create({
                name,
                lastname, 
                society, 
                telephone, 
                email,
                size, 
                date, 
                price, 
                message,
                image
            });

            // console.log('Dati salvati con successo', datiSalvati); // Aggiungi questo console.log

            ctx.send({ message: 'Email inviata con successo' });
        } catch (error) {
            console.error('Errore durante l\'invio:', error); // Aggiungi questo console.log

            ctx.status = 500;
            ctx.send({ error: 'Si è verificato un errore durante l\'invio dei dati', details: error.message });
        }
    }
}));