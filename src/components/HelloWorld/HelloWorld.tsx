import type { HelloWorldProps } from "./HelloWorld.types";

export function HelloWorld({ children }: HelloWorldProps) {
  return <div>{children}</div>;
}
