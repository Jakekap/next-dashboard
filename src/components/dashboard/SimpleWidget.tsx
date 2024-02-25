import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  title: string;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({ title, subTitle, label, icon, href }: Props) => {
  return (
    <div className="bg-white shadow-xl sm:min-w-[25%] min-w-full rounded-2xl border-1 border-gray-50">
      <div className="flex flex-col">
        <div className="p-4">
          {label && (
            <div className="pb-3">
              <h2 className="font-bold text-gray-600 text-center">{label}</h2>
            </div>
          )}
          <div className="flex gap-4 flex-row items-center justify-center space-x-1 ">
            {icon}
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{title ?? "Título"}</h4>
              <p className="text-xs text-gray-500">{subTitle ?? "Subtitulo"}</p>
            </div>
          </div>
        </div>
        <hr />
        {href && (
          <div className="w-full p-2 flex justify-center text-right border-gray-100">
            <Link
              href={href}
              className="text-indigo-600 text-xs font-medium hover:underline"
            >
              Más
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
