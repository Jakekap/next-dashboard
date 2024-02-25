import { SimpleWidget } from "@/src/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart Page",
};
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Pokémones favoritos</span>
      <SimpleWidget />
    </div>
  );
}
