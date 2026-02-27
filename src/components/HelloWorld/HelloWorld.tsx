import { ReactNode } from "react";

type HelloWorldProps = {
  children?: ReactNode;
};

export function HelloWorld({ children }: HelloWorldProps) {
  return (
    <div className="p-6 bg-blue-50 text-blue-900 border border-blue-200 rounded-xl shadow-sm text-center font-medium">
      {children}
    </div>
  );
}
