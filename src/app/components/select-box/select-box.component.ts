import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'select-box',
  templateUrl: './select-box.component.html',
  styles: [],
})
export class SelectBoxComponent implements OnInit {
  @Input() name: string = '';
  @Input() number: number = 1;
  @Output() select = new EventEmitter();
  array: Array<number> = [];

  onSelect(e: any) {
    this.select.emit({
      name: this.name.toLowerCase(),
      value: parseInt(e.target.value),
    });
  }

  ngOnInit() {
    for (let i = 1; i <= this.number; i++) {
      this.array.push(i);
    }
  }
}
