import React from 'react'
import { render } from '@testing-library/react'
import Markdown from 'markdown-to-jsx'

describe('Markdown', () => {
  it('should be able to load markdown file', () => {
    const { container, getByText } = render(
      <Markdown children="**Title**" />
    )

    expect(getByText('Title')).toBeTruthy()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <strong>
        Title
      </strong>
    `)
  })
})