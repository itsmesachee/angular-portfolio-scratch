import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { MaterialTestComponent } from './app/material-test/material-test.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(MaterialTestComponent, {
  providers: [
    provideAnimations(), // <-- enables Angular Material animations
  ],
}).catch(err => console.error(err));
