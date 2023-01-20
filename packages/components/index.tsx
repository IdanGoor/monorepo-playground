import * as React from "react";
import { Button } from "@monorepo-playground/ui";
import { sayHello } from "utils";

export const SpecialButton = () => {
  return <Button onClick={() => sayHello("Ofer")} />;
};
