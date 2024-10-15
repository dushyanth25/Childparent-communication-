import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: string[] = []; // Receives the items array from the parent

  @Output() removeItemEvent = new EventEmitter<string>(); // Event to notify parent of removed item

  // Method to emit the removal of the item to the parent
  removeItem(itemToRemove: string) {
    this.removeItemEvent.emit(itemToRemove); // Emit the item to be removed to the parent
  }
}
