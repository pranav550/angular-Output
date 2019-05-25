import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  data: string;

  @Output() selectData = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelectData(data: string) {
    this.selectData.emit(data);
  }

}
