module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',//host: env('SMTP_HOST'),
        port: 587,
        auth: {
          user: 'micheleboaretto59@gmail.com',
          pass: 'trhytsuyjqgieejc',
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'micheleboaretto59@gmail.com',
        defaultReplyTo: 'micheleboaretto59@gmail.com',
      },
    },
  },
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024 // 256mb in byte
    }
  }

  // ...
});
