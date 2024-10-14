import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject as injectAnalytics } from '@vercel/analytics';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));

injectAnalytics();
