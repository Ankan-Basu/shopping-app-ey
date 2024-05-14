import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  menuOpen = false;

  menuName = 'Option';

  options = ['About', 'Settings', 'Home', 'Login'];

  optionSelected = '';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

  selectOption(option: string) {
    this.optionSelected = option;
    this.menuOpen = false;
  }
}
