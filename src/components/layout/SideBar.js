import { useLocation } from "react-router-dom";

const SideBar = ({ children, className = "" }) => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  // if (path === 'profile') {
  //   return null;
  // }

  return (
    <aside className="my-5 max-h-[530px] flex flex-col border border-gray-800 bg-black/50 rounded-r-md shadow-md shadow-slate-800">
      {children}
    </aside>
  );
};

export default SideBar;
