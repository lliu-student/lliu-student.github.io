export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e63e147f9ab82a1b3f02323a285287cf'),
  },
});
