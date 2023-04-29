import * as React from "react"
import { Button, Input } from "@monorepo-playground/ui"
import { sayHello } from "utils"

export const SpecialButton = () => {
  return <Button onClick={() => sayHello("Ofer")} />
}

export const MagicButton = () => {
  return <Button onClick={() => sayHello("Magic!")} />
}

export const Page = () => {
  return (
    <div>
      <Input />
    </div>
  )
}
