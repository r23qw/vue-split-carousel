import type { ComputedRef } from 'vue-demi';
import type { CarouselLayout } from './carousel';
declare const _default: import("vue-demi").DefineComponent<{
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayAmount: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemWidth: {
        type: NumberConstructor;
        default: number;
    };
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    timingFunction: {
        type: StringConstructor;
        default: string;
    };
    arrowVisible: {
        type: StringConstructor;
        validator: (i: string) => boolean;
        default: string;
    };
}, {
    prev: () => void;
    next: () => void;
    enter: () => void;
    leave: () => void;
    layout: ComputedRef<CarouselLayout>;
    viewportDOMRef: import("vue-demi").Ref<HTMLElement>;
    hasLeftSlot: boolean;
    hasRightSlot: boolean;
    isLeftArrowVisiable: ComputedRef<boolean>;
    isRightArrowVisiable: ComputedRef<boolean>;
    activeIndex: import("vue-demi").Ref<number>;
    items: import("vue-demi").Ref<{
        uid: number;
    }[]>;
}, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayAmount: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemWidth: {
        type: NumberConstructor;
        default: number;
    };
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    timingFunction: {
        type: StringConstructor;
        default: string;
    };
    arrowVisible: {
        type: StringConstructor;
        validator: (i: string) => boolean;
        default: string;
    };
}>>, {
    interval: number;
    height: string | number;
    autoplay: boolean;
    loop: boolean;
    speed: number;
    displayAmount: number;
    itemWidth: number;
    pauseOnHover: boolean;
    timingFunction: string;
    arrowVisible: string;
}>;
export default _default;
