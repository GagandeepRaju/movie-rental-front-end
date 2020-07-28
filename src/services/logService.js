import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://7ea68df4816748cc96fdba7b066e3f31@sentry.io/1876825"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
