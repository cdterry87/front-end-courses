import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  const wrapper = mount(RandomNumber)

  test('By default, random number should be 0', () => {
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('If button is clicked, random number should be between 1 and 10', async () => {
    wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()

    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('If button is clicked, random number should be between 200 and 300', async () => {
    wrapper.setProps({
      min: 200,
      max: 300
    })
    
    wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()

    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})