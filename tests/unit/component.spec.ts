import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import SplitCarousel from "@/components/SplitCarousel.vue";
import SplitCarouselItem from "@/components/SplitCarouselItem.vue";

const sleep = (interval: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, interval);
  });

describe("Split Carousel Component", () => {
  const CarouselWrapper = defineComponent({
    props: {
      itemAmount: {
        type: Number,
        default: 6,
      },
      option: {
        type: Object,
        default: () => ({
          displayAmount: 4,
          autoplay: true,
          speed: 500,
          interval: 3000,
          loop: true,
          height: 80,
          itemWidth: 120,
          pauseOnHover: true,
          timingFunction: "ease",
          arrowVisible: "default",
        }),
      },
    },
    components: { SplitCarousel, SplitCarouselItem },
    template: `
      <split-carousel v-bind="option">
        <split-carousel-item v-for="item in itemAmount" :key="item">
          {{item}}
        </split-carousel-item>
      </split-carousel>
    `,
  });
  it("Match snapshot", () => {
    const wrapper = mount(CarouselWrapper);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Static carousel", () => {
    const wrapper = mount(CarouselWrapper, { props: { itemAmount: 3 } });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Autoplay", async () => {
    const wrapper = mount(CarouselWrapper);
    await sleep(4000);
    const first = wrapper.findAllComponents(SplitCarouselItem).filter((i) => {
      return (i.vm as any).itemStyle.transform === "translateX(0px)";
    });
    expect(first?.[0].text()).toBe("2");
  });
  it("Not autoplay", async () => {
    const wrapper = mount(CarouselWrapper, {
      props: { option: { autoplay: false } },
    });
    await sleep(4000);
    const first = wrapper.findAllComponents(SplitCarouselItem).filter((i) => {
      return (i.vm as any).itemStyle.transform === "translateX(0px)";
    });
    expect(first?.[0].text()).toBe("1");
  });
});
