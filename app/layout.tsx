import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>我是layout</h1>
      <h2>我是子组件</h2>
      {children}
      
      <footer>@Liu</footer>
    </>
  );
}