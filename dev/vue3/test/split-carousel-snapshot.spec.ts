import { mount } from '@vue/test-utils';
import { expect, test, describe } from 'vitest';
import {
  SplitCarousel,
  SplitCarouselItem,
} from '../../../packages/SplitCarousel';

let Component = {
  components: { SplitCarousel, SplitCarouselItem },
  props: {
    count: { type: Number, default: 8 },
    splitCarouselProps: { type: Object, required: false, default: () => {} },
  },
  template: `
  <SplitCarousel v-bind="splitCarouselProps">
    <SplitCarouselItem v-for="i in count" :key="i">
        {{ i }}
    </SplitCarouselItem>
  </SplitCarousel>
  `,
};
describe('mount', () => {
  test('mount snapshot', () => {
    let wrapper = mount(Component);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
