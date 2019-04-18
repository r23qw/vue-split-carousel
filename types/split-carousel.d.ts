import { Component } from './component'
export declare class SplitCarousel extends Component {
  speed: number;
  autoplay: boolean;
  interval: number;
  loop: boolean;
  initialIndex: number;
  displayAmount: number;
  itemWidth: number;
  itemAlign: 'center' | 'left' | 'right';
  height: number;
  timingFunction: string;
  arrowAreaWidth: number;
  arrowVisible: 'enable' | 'always'
  hoverCanclePlay: boolean;
  playDirection: 'ltr' | 'rtl'
}