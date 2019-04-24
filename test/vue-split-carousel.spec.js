/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { expect } from 'chai'
import { shallowMount, mount, renderToString } from '@vue/test-utils'
import Test from './test.vue'

describe('Split Carousel', () => {
  it('mounted', () => {
    const wrapper = mount(Test)
    let items = wrapper.findAll('.split-carousel-item')
    expect(items.length).to.equal(6)
  })
  it('click', () => {
    const wrapper = mount(Test)
    let left = wrapper.find('.split-carousel--arrow__left')
    let right = wrapper.find('.split-carousel--arrow__right')
    let vm = wrapper.vm.$children[0]
    expect(vm.index).to.equal(0)
    left.trigger('click')
    expect(vm.index).to.equal(7)
    right.trigger('click')
    expect(vm.index).to.equal(0)
  })
})
