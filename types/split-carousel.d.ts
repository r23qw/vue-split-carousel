import { Component } from './component'
export declare class SplitCarousel extends Component {
  /* duration of carousel item animation,in milliseconds */
  speed: number;
  /* whether automatically switch carousel items */
  autoplay: boolean;
  /* interval of switch carousel items, in milliseconds */
  interval: number;
  /* whether display carousel items in loop */
  loop: boolean;
  /* 	index of initally first carousel item */
  initialIndex: number;
  /* the amount of carousel items display in carousel container */
  displayAmount: number;
  /* 	the width of carousel items */
  itemWidth: number;
  /* 	carousel item alignment while carousel item amount less than display amount */
  itemAlign: 'center' | 'left' | 'right';
  /* height of carousel */
  height: number;
  /* the animation effect of carousel item,reference transition-timing-function */
  timingFunction: string;
  /* the width of arrow area */
  arrowAreaWidth: number;
  /* when arrows are show */
  arrowVisible: 'enable' | 'always'
  /* whether stop auto play while mouse hover */
  hoverCanclePlay: boolean;
  /* the moving direction of carousel item */
  playDirection: 'ltr' | 'rtl'
}