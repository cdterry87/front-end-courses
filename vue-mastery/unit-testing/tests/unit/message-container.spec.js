import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        Message: '<p data-test-id="message">Hello from the db!</p>'
      }
    })

    const stubMessage = 'Hello from the db!'
    const message = wrapper.find('[data-test-id="message"]').element.textContent
    expect(message).toEqual(stubMessage)
  })
})