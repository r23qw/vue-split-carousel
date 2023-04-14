import { mount } from '@vue/test-utils';
import { expect, test, describe } from 'vitest';
import {
  SplitCarousel,
  SplitCarouselItem,
} from '../../../packages/SplitCarousel';

let sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let Component = {
  components: { SplitCarousel, SplitCarouselItem },
  props: {
    count: { type: Number, default: 8 },
    splitCarouselProps: { type: Object, required: false, default: () => {} },
  },
  template: `
  <div style="width:800px;margin:0 auto;">
    <SplitCarousel v-bind="splitCarouselProps">
      <SplitCarouselItem v-for="i in count" :key="i">
          {{ i }}
      </SplitCarouselItem>
    </SplitCarousel>
  </div>
  `,
};
describe('mount', () => {
  test.concurrent('static carousel', async () => {
    let wrapper = mount(Component, {
      props: { count: 3, splitCarouselProps: {} },
    });

    // wait for component setup
    await sleep(100);

    let viewport = wrapper.find('.split-carousel__viewport');
    expect(viewport.classes()).include('split-carousel__viewport--static');

    await wrapper.setProps({ count: 8 });
    expect(viewport.classes()).not.include('split-carousel__viewport--static');
  });
});

describe('loop', async () => {
  test.concurrent('loop on', async () => {
    let wrapper = mount(Component, {
      props: {
        count: 5,
        splitCarouselProps: { interval: 100, autoplay: true },
      },
    });
    let items = wrapper.get('.split-carousel').findAll('.split-carousel__item');
    await sleep(10);
    expect(items[0].attributes().style).toContain('translateX(0px)');
    await sleep(140);
    expect(items[1].attributes().style).toContain(`translateX(0px)`);
    await sleep(100);
    expect(items[2].attributes().style).toContain(`translateX(0px)`);
    await sleep(100);
    expect(items[3].attributes().style).toContain(`translateX(0px)`);
    await sleep(100);
    expect(items[4].attributes().style).toContain(`translateX(0px)`);
    await sleep(100);
    expect(items[0].attributes().style).toContain(`translateX(0px)`);
  });
  test.concurrent('loop off', async () => {
    let wrapper = mount(Component, {
      props: {
        count: 5,
        splitCarouselProps: { interval: 100, autoplay: true, loop: false },
      },
    });
    let items = wrapper.get('.split-carousel').findAll('.split-carousel__item');
    await sleep(10);
    expect(items[0].attributes().style).toContain('translateX(0px)');
    await sleep(140);
    expect(items[1].attributes().style).toContain(`translateX(0px)`);
    await sleep(100);
    expect(items[1].attributes().style).toContain(`translateX(0px)`);
    await sleep(100);
    expect(items[1].attributes().style).toContain(`translateX(0px)`);
  });
});

describe('arrow slot', () => {
  test.concurrent('arrow slot', async () => {
    let Component = {
      components: { SplitCarousel, SplitCarouselItem },
      template: `
        <SplitCarousel v-bind="splitCarouselProps">
          <div class="arrow-left">arrow</div>
          <SplitCarouselItem v-for="i in 5" :key="i">
              {{ i }}
          </SplitCarouselItem>
          <div class="arrow-right">arrow</div>
        </SplitCarousel>
      `,
    };
    let wrapper = mount(Component);
    expect(wrapper.find('.arrow-left').exists()).toBe(true);
    expect(wrapper.find('.arrow-right').exists()).toBe(true);
  });
});

describe('pause on hover', () => {
  test.concurrent('pause on hover is on', async () => {
    let wrapper = mount(Component, {
      props: {
        count: 5,
        splitCarouselProps: {
          interval: 100,
          autoplay: true,
          loop: true,
          speed: 0,
        },
      },
    });
    let items = wrapper.get('.split-carousel').findAll('.split-carousel__item');
    let viewport = wrapper.get('.split-carousel__viewport');
    await sleep(10);
    expect(items[0].attributes().style).toContain('translateX(0px)');
    await sleep(140);
    viewport.trigger('mouseenter');
    expect(items[1].attributes().style).toContain(`translateX(0px)`);
    await sleep(100);
    expect(items[1].attributes().style).toContain(`translateX(0px)`);
    viewport.trigger('mouseleave');
    await sleep(140);
    expect(items[2].attributes().style).toContain(`translateX(0px)`);
  });

  test.concurrent('pause on hover is off', async () => {
    let wrapper = mount(Component, {
      props: {
        count: 5,
        splitCarouselProps: {
          interval: 100,
          autoplay: true,
          loop: true,
          speed: 0,
          pauseOnHover: false,
        },
      },
    });
    let items = wrapper.get('.split-carousel').findAll('.split-carousel__item');
    let viewport = wrapper.get('.split-carousel__viewport');
    await sleep(10);
    expect(items[0].attributes().style).toContain('translateX(0px)');
    await sleep(140);
    viewport.trigger('mouseenter');
    expect(items[1].attributes().style).toContain(`translateX(0px)`);
    await sleep(100);
    expect(items[2].attributes().style).toContain(`translateX(0px)`);
    viewport.trigger('mouseleave');
    await sleep(100);
    expect(items[3].attributes().style).toContain(`translateX(0px)`);
  });
});

describe('arrow', () => {
  test.concurrent('arrow click', async () => {
    let wrapper = mount(Component, {
      props: {
        count: 5,
        splitCarouselProps: {
          interval: 100,
          loop: true,
          speed: 0,
        },
      },
    });
    let items = wrapper.get('.split-carousel').findAll('.split-carousel__item');
    let leftArrow = wrapper.get('.split-carousel__left');
    let rightArrow = wrapper.get('.split-carousel__right');
    await sleep(10);
    expect(items[0].attributes().style).toContain('translateX(0px)');
    leftArrow.trigger('click');
    await sleep(50);
    expect(items[4].attributes().style).toContain(`translateX(0px)`);
    rightArrow.trigger('click');
    await sleep(50);
    expect(items[0].attributes().style).toContain(`translateX(0px)`);
  });
});
