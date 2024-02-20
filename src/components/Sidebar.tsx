import Image from "next/image";
import { TbCategory2, TbDatabasePlus } from "react-icons/tb";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { PiAlienBold } from "react-icons/pi";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <TbCategory2 size={32} />,
    title: "Dashboard",
    subtitle: "Data Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <TbDatabasePlus size={32} />,
    title: "Counter",
    subtitle: "Contador local",
  },
  {
    path: "/dashboard/rick-n-morty",
    icon: <PiAlienBold size={32} />,
    title: "Rick & Morty",
    subtitle: "Gen Estática",
  },
];

export const Sidebar = () => {
  return (
    <div
      style={{ width: "400px" }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 overflow-y-scroll"
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
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
