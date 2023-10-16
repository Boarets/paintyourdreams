module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'),
          port: 587,
          auth: {
            user: 'micheleboaretto59@gmail.com',
            pass: 'mzsmkjejtkwxdcpn',
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'micheleboaretto59@gmail.com',
          defaultReplyTo: 'micheleboaretto59@gmail.com',
        },
      },
    },
    // ...
  });

  module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
    },
  });