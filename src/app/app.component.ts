import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChildParentCommunication';

  items = ['lg', 'lenovo', 'samsung']; // Initial list of items

  // Method to handle the new item from input and add it to the list
  addItem(newItem: string) {
    if (newItem) {
      this.items.push(newItem); // Add the new item to the list
    }
  }

  // Method to handle the removal of an item from the child
  removeItem(itemToRemove: string) {
    this.items = this.items.filter(item => item !== itemToRemove); // Remove the item
  }

  // Method to get the count of items
  getItemCount(): number {
    return this.items.length;
  }
}
