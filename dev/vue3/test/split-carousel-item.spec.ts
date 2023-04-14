import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { SplitCarouselItem } from '../../../packages/SplitCarousel';

test('has parent SplitCarouel', () => {
  let Component = {
    components: { SplitCarouselItem },
    template: `<SplitCarouselItem>test</SplitCarouselItem>`,
  };
  try {
    mount(Component);
  } catch (e: any) {
    expect(e).toBeInstanceOf(Error);
  }
});
