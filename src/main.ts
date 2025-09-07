import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { provideHttpClient } from '@angular/common/http';




bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient()   // 👈 add this
  ]
})
  .catch((err) => console.error(err));
