import * as React from "react"
import { Button, Input } from "@monorepo-playground/ui"
import { sayHello } from "utils"

export const SpecialButton = () => {
  return <Button onClick={() => sayHello("Ofer")} />
}

export const MagicButton = () => {
  return (
    <div>
      <Button onClick={() => sayHello("Magic!")} />
    </div>
  )
}

export const Page = () => {
  return (
    <div>
      <Input />
    </div>
  )
}
