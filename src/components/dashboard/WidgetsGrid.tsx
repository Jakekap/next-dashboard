"use client";
import { SimpleWidget } from "@/src/components";
import { useAppSelector } from "@/src/store";
import { TiShoppingCart } from "react-icons/ti";

export const WidgetsGrid = () => {
  const isCard = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 justify-center">
      <SimpleWidget
        title={`${isCard}`}
        subTitle="Productos agregados"
        label="SuperCard"
        icon={<TiShoppingCart size={42} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
