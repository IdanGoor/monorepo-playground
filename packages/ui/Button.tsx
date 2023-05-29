import * as React from "react"

export interface ButtonProps {
  onClick?: () => void
}

export const Button = ({ onClick }: ButtonProps) => {
  const handleClick = () => {
    onClick?.()

    console.log("boom")
  }

  return <button onClick={handleClick}>Boop</button>
}

export const SpecialButton = () => <button />
