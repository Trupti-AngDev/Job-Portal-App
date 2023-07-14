const base = "/api";

export default {
  url: {
    base,
  },
  timers: {},
  env: {},
  authorizationIgnorePath: [
    `/user/register`,
    `/user/sign-in`,
    `/user/google`,
    `/user/google/callback`,
    `/user/request-reset`,
    `/update-password/:token`,
    `/user/test-google-protected`,
    `/user/logout`,
  ],
};
