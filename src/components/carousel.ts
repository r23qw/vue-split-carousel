import type { ComponentInternalInstance, ComputedRef, Ref } from "vue";

export type ComponentUid = ComponentInternalInstance["uid"];

export interface CarouselItem {
  uid: ComponentUid;
}

export interface CarouselStag {
  prependUid: ComponentUid;
  stagUids: ComponentUid[];
  appendUid: ComponentUid;
}

export interface CarouselReset {
  resetting: boolean;
  action: "prev" | "next";
}

export interface CarouselLayout {
  isStatic: boolean;
  viewportWidth: number;
  itemWidth: number;
  gapWidth: number;
  itemBlockWidth: number;
  prependPosition: number;
  appendPostion: number;
}

export interface InjectCarouselScope {
  stag: ComputedRef<CarouselStag>;
  reset: CarouselReset;
  layout: ComputedRef<CarouselLayout>;
  removeItem: (id: number) => void;
  addItem: (item: CarouselItem) => void;
  speed: Ref<number>;
  timingFunction: Ref<string>;
}

export interface ComponentStyle {
  [key: string]: string;
}
