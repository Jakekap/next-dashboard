"use client";

import { useEffect } from "react";
import style from "./error.module.css";
import Link from "next/link";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div
        className={`flex items-center justify-center h-screen w-full bg-indigo-500 bg-fixed bg-cover bg-bottom ${style.errorBg}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
              <div className="relative ">
                <h1
                  className={`relative text-9xl ${style.trackingTighterLess} ${style.textShadow} font-sans font-bold`}
                >
                  <span>5</span>
                  <span>0</span>
                  <span>0</span>
                </h1>
                <span className="absolute  top-0   -ml-12  text-gray-300 font-semibold">
                  Oops!
                </span>
              </div>
              <h5 className="text-gray-300 font-semibold -mr-10 -mt-3">
                Internal Server Error
              </h5>
              <p className="text-gray-100 mt-2 mb-6">
                We are sorry, but the page you requested was not found
              </p>
              <Link
                href={"/dashboard/main"}
                className="bg-green-400 cursor-pointer px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg"
              >
                Got to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
