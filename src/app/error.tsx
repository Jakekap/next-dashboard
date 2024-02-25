"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div
        className={`flex items-center justify-center h-screen w-full bg-indigo-500 bg-fixed bg-cover bg-bottom bg-[url('/mountains.svg')]`}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
              <div className="relative ">
                <h1
                  className={`relative text-9xl tracking-tighter drop-shadow-[-8px_0_0_rgb(102,123,242)] font-sans font-bold`}
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
              <button
                onClick={() => router.push("/dashboard/main")}
                className="bg-green-400 hover:bg-white hover:text-green-400 cursor-pointer px-5 py-3 text-sm font-medium tracking-wider text-gray-50 rounded-full transition-all"
              >
                Got to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
