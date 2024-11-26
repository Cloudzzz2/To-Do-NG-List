import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, RouterOutlet } from '@angular/router';
=======
import { RouterModule } from '@angular/router';
>>>>>>> b1fb3c3 (Fixes Commit)
import { DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DxButtonModule,
    RouterModule
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
