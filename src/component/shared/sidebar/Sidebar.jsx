// components/sidebar/Sidebar.jsx
import {NavLink} from "react-router-dom";

function Sidebar({menuItems = [], className = ""}) {
  return (
    <aside
      className={`w-64 h-screen bg-gray-900 text-gray-200 p-4 ${className}`}
    >
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({isActive}) =>
              `flex items-center px-3 py-2 rounded-md text-sm transition
               ${
                 isActive
                   ? "bg-gray-800 text-white"
                   : "hover:bg-gray-800 hover:text-white"
               }`
            }
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label} <br></br>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
