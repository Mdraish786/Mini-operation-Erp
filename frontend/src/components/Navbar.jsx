import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout, login } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Quick switch role helper for presentation / interview demo
  const quickSwitch = async (email, pass) => {
    try {
      await login(email, pass);
    } catch (e) {
      console.error(e);
    }
  };

  const getRoleBadge = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'operations':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'sales':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                E
              </span>
              <div>
                <span className="font-bold text-slate-800 tracking-tight text-lg">OpsERP</span>
                <span className="text-xs ml-1.5 text-indigo-600 font-semibold uppercase bg-indigo-50 px-1.5 py-0.5 rounded">Mini</span>
              </div>
            </div>

            <nav className="flex space-x-1">
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                Inventory
              </NavLink>

              <NavLink
                to="/work-orders"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                Work Orders
              </NavLink>

              <NavLink
                to="/transfers"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                Internal Transfers
              </NavLink>

              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                Customer Orders
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Demo Role Switcher */}
            <div className="hidden lg:flex items-center text-xs bg-slate-100 p-1 rounded-lg border border-slate-200">
              <span className="text-slate-500 px-2 font-medium">Demo Switch:</span>
              <button
                onClick={() => quickSwitch('admin@erp.com', 'admin123')}
                className={`px-2 py-1 rounded transition ${user?.role === 'admin' ? 'bg-white shadow text-purple-700 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Admin
              </button>
              <button
                onClick={() => quickSwitch('ops@erp.com', 'ops123')}
                className={`px-2 py-1 rounded transition ${user?.role === 'operations' ? 'bg-white shadow text-blue-700 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Operations
              </button>
              <button
                onClick={() => quickSwitch('sales@erp.com', 'sales123')}
                className={`px-2 py-1 rounded transition ${user?.role === 'sales' ? 'bg-white shadow text-emerald-700 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Sales
              </button>
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="text-right">
                <div className="text-xs font-semibold text-slate-800">{user?.name}</div>
                <span className={`inline-block px-1.5 py-0.2 text-[10px] uppercase font-bold border rounded-full ${getRoleBadge(user?.role)}`}>
                  {user?.role}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 px-2.5 py-1.5 rounded-md transition font-medium border border-slate-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
