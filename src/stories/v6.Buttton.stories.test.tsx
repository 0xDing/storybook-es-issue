import { describe, it, expect } from 'vitest'
import * as ButtonStories from './Button.stories'
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

const stories = composeStories(ButtonStories as any)
const Secondary = stories.Secondary as any

describe('test', () => {
  it('composeStories should work', () => {
    render(<Secondary />)
    expect(screen.findByRole('button')).toBeDefined()
  })
})