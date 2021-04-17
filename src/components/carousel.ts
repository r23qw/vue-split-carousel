import type { ComponentInternalInstance, ComputedRef, Ref } from "vue";

export type ComponentUid = ComponentInternalInstance["uid"];

export interface CarouselItem {
  uid: ComponentUid;
}

export interface StagInfo {
  prependUid: ComponentUid;
  stagUids: ComponentUid[];
  appendUid: ComponentUid;
}

export interface ResetInfo {
  value: boolean;
  action: "prev" | "next";
}

export interface InjectCarouselScope {
  isStatic: ComputedRef<boolean>;
  removeItem: (id: number) => void;
  addItem: (item: CarouselItem) => void;
  speed: number;
  viewportWidth: Ref<number>;
  itemWidth: number;
  gapWidth: ComputedRef<number>;
  itemBlockWidth: ComputedRef<number>;
  stagInfo: ComputedRef<StagInfo>;
  resetInfo: ResetInfo;
}

export interface ComponentStyle {
  [key: string]: string;
}
