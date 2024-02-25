// import { AiOutlineSmile } from "react-icons/ai";
// import { IoSkullOutline } from "react-icons/io5";
// import { FaQuestion } from "react-icons/fa";

// interface StatusMap {
//   [key: string]: {
//     color: string;
//     icon: JSX.Element;
//   };
// }

// interface CharacterStatusProps {
//   status: string;
// }

// const statusMap: StatusMap = {
//   Alive: {
//     color: "bg-green-400",
//     icon: <AiOutlineSmile size={24} color="white" />,
//   },
//   Dead: {
//     color: "bg-red-400",
//     icon: <IoSkullOutline size={24} color="white" />,
//   },
//   unknown: {
//     color: "bg-gray-400",
//     icon: <FaQuestion size={24} color="white" />,
//   },
// };

// const CharacterStatus: React.FC<CharacterStatusProps> = ({ status }) => {
//   const { color, icon } = statusMap[status] || statusMap.unknown;

//   return (
//     <span
//       className={`flex justify-center items-center bottom-0 right-0 absolute w-10 h-10 ${color} border-2 border-white rounded-full`}
//     >
//       {icon}
//     </span>
//   );
// };
// export default CharacterStatus;
