import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp';
}
