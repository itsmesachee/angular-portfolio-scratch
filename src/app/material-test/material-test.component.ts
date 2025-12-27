import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-material-test',
   standalone: true, // Standalone component, no AppModule needed -- TODO : need to understand this
  imports: [MatButtonModule],//adding material button
  // templateUrl: './material-test.component.html',
  // styleUrls: ['./material-test.component.scss'],
  template: `<button mat-raised-button color="primary">Click Me!</button>`,// Simple Material-styled button -- also need to understand if we can end with ','
  //You cannot have both templateUrl and template in the same @Component.
  //Angular will ignore template if templateUrl is present.
})
export class MaterialTestComponent {

}
