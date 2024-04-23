import { ApplicationConfig, ValueProvider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { provideEnvironmentNgxMask } from 'ngx-mask';

const SNACK_BAR_CONFIG: ValueProvider = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  } as MatSnackBarConfig
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    SNACK_BAR_CONFIG,
    provideEnvironmentNgxMask(), provideAnimationsAsync(),
  ]
};
