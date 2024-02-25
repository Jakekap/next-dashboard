import Image from "next/image";
import { TbCategory2 } from "react-icons/tb";
import { BsCalculator } from "react-icons/bs";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { PiCat } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <TbCategory2 size={32} />,
    title: "Dashboard",
    subtitle: "Data Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <BsCalculator size={32} />,
    title: "Counter",
    subtitle: "Contador local",
  },
  {
    path: "/dashboard/pokemons",
    icon: <PiCat size={32} />,
    title: "Pokémon",
    subtitle: "Gen Estática",
  },
  {
    path: "/dashboard/favorites",
    icon: <FaRegHeart size={32} />,
    title: "Favorite Pokémons",
    subtitle: "Global State",
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
