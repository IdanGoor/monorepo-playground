import * as React from "react"
import { sayHello } from "utils"

export interface ButtonProps {
  onClick?: () => void
}

export const Button = ({ onClick }: ButtonProps) => {
  const handleClick = () => {
    sayHello("Idan")
    onClick?.()

    console.log("boom")
  }

  return <button onClick={handleClick}>Boop</button>
}
