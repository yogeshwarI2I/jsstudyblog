import {Outlet, useLocation} from "react-router-dom";
import {Home, Settings, User} from "lucide-react";
import Header from "../../component/shared/header/Header";
import Sidebar from "../../component/shared/sidebar/Sidebar";

function Layout() {
  const sidebarMenu = [
    {label: "Home", path: "/home", icon: <Home size={16} />},
    {label: "Profile", path: "/profile", icon: <User size={16} />},
    {label: "Settings", path: "/settings", icon: <Settings size={16} />},
  ];

  const {pathname} = useLocation();
  const active = sidebarMenu.find((item) => item.path === pathname);
  const headerTitle = active?.label ?? "Dashboard";

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar menuItems={sidebarMenu} className="sticky top-0" />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Header title={headerTitle} />
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
