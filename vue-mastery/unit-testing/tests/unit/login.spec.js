import Login from '@/components/Login'
import { mount } from '@vue/test-utils'

describe('Login', () => {
  const wrapper = mount(Login)

  it('emits an event with user data payload', () => {
    const input =  wrapper.find('[data-test-id="name-input"]')
    input.setValue('Chase Terry')

    wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    const expectedPayload = { name: 'Chase Terry' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
})