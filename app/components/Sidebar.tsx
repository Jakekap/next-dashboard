import Image from "next/image";
import { TbCategory2, TbDatabasePlus } from "react-icons/tb";
export const Sidebar = () => {
  return (
    <div
      style={{ width: "400px" }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 h-screen overflow-y-scroll"
    >
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={100}
              height={200}
              className="rounded-full object-cover object-top w-8 h-8"
              src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg"
              alt="Sapo Pepe"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Jakekap</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <TbCategory2 size={32} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white">
              Dashboard
            </span>
            <span className="text-sm text-white/50 hidden md:block">
              Data Overview
            </span>
          </div>
        </a>
        <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <TbDatabasePlus size={32} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Counter
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Estado local
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
