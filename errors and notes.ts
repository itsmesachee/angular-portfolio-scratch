errors and notes

========================

Application bundle generation failed. [0.127 seconds]

X [ERROR] TS2353: Object literal may only specify known properties, and 'imports' does not exist in type 'ApplicationConfig'. [plugin angular-compiler]

    src/main.ts:9:2:
      9 │   imports: [BrowserAnimationsModule] // required for Material anima...

LESSON : 
In Angular 19+, bootstrapApplication accepts an ApplicationConfig object.
imports is not allowed directly inside ApplicationConfig if TypeScript doesn’t recognize it (it depends on Angular version).
Instead, Angular now expects modules to be added via providers: [provideAnimations()] for animations.

-> Error : NG05104: The selector "app-material-test" did not match any elements
LESSON:
In Angular 17+ standalone components, when you bootstrap with bootstrapApplication(MaterialTestComponent), Angular will not look for a selector in index.html.

Instead, the component itself becomes the root component, and its selector is ignored in this context.

BUT if you accidentally used:

bootstrapApplication(AppComponent, { providers: [provideAnimations()] });


and your AppComponent template does not include <app-material-test>, Angular won’t render it.




Option 1 — Bootstrap MaterialTestComponent directly (minimal test)

main.ts:

import { bootstrapApplication } from '@angular/platform-browser';
import { MaterialTestComponent } from './app/material-test/material-test.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(MaterialTestComponent, {
  providers: [provideAnimations()]
}).catch(err => console.error(err));


No <app-material-test> is needed in index.html

The component renders itself as the root

Ensure material-test.component.ts has only inline template:

@Component({
  standalone: true,
  imports: [MatButtonModule],
  template: `<button mat-raised-button color="primary">Click Me!</button>`,
})
export class MaterialTestComponent {}


Remove selector, or leave it — it is ignored for root component bootstrapping.

Option 2 — Keep AppComponent as root and include MaterialTestComponent inside

main.ts:

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()]
}).catch(err => console.error(err));


app.component.ts:

import { Component } from '@angular/core';
import { MaterialTestComponent } from './material-test/material-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaterialTestComponent], // <-- import the test component
  template: `<app-material-test></app-material-test>`, // render it inside root
})
export class AppComponent {}


This is the preferred approach if you want to keep AppComponent as the main root for your portfolio app.