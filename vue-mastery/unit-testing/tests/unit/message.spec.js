import Message from '@/components/Message'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('Message', () => {
  it('Calls getMessage and displays message', async () => {
    const mockMessage = 'Hello from the db'
    getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(Message)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)

    const message = wrapper.find('[data-test-id="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(Message)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    const displayedError = wrapper.find('[data-test-id="error"]').element
      .textContent
    expect(displayedError).toEqual(mockError)
  })
})