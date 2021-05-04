import Header from '@/components/Header'
import { mount } from '@vue/test-utils'

describe('Header', () => {
  const wrapper = mount(Header)

  test('If user is not logged in, do not show logout button', () => {
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user is logged in, show logout button', async () => {
    wrapper.setData({ isLoggedIn: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})