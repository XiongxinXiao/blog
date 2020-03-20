import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verticle-grid',
  templateUrl: './verticle-grid.component.html',
  styleUrls: ['./verticle-grid.component.css']
})
export class VerticleGridComponent implements OnInit {
  @Input() itemWidth = '4rem';
  @Input() itemHeight = '4rem';
  @Input() gridGap = '5px';
  constructor() {}

  ngOnInit() {}
  /* 响应式布局网格，auto-fill 用来在空间足够时尽可能的填充该位置，minmax 是最小和最大的宽度 */
  get templateRows() {
    return `minmax(${this.itemHeight}, auto)`;
  }
  /**
   * CSS Grid Layout 的模版列表达式
   */
  get templateColumns() {
    return `repeat(auto-fill, minmax(${this.itemWidth}, 1fr))`;
  }

}
