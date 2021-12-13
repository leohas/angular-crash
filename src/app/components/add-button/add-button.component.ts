import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'AddButton',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Input() text!: string
  @Input() color!: string
  constructor() { }

  ngOnInit(): void {
  }

}
