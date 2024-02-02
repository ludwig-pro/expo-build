import * as Sentry from 'sentry-expo';

import { config } from './config';

Sentry.init({
  dsn: config.DSN,
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});
