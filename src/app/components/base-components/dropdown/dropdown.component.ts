import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() menuName = 'Options';
  @Input() options: string[] = [];

  menuOpen = false;

  // menuName = 'Option';

  // options = ['About', 'Settings', 'Home', 'Login'];

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
