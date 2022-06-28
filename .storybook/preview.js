import React from 'react'
import styled from 'styled-components'

const WrapperStory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
`

export const decorators = [
  (Story) => (
    <WrapperStory>
      <Story />
    </WrapperStory>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}