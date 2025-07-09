import { cva } from "class-variance-authority";

const button = cva("rounded px-4 py-2 text-white bg-blue-600");

export function Button() {
  return <button className={button()}>Clique aqui</button>;
}
