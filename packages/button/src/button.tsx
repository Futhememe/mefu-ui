import * as React from "react"
import { StyledButton } from "./styles"

export interface ButtonProps {
	children?: React.ReactElement
}

export function Button(props: ButtonProps) {
	return <StyledButton>{props.children}</StyledButton>
}
