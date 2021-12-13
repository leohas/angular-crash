import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'AddButton',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Input() text!: string
  @Input() color!: string
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit()
  }

}
