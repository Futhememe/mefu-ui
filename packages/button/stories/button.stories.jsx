import React from 'react'
import { Button } from '../src/button'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {}
}
 
const Template = (args) => {
	return (
		<Button>Click me</Button>
	)
}

export const Primary = Template.bind({})