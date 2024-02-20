import { CartCounter } from "@/src/shopping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart Page",
};
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter />
    </div>
  );
}
