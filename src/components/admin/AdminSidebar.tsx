import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, BarChart2, Blocks, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function AdminSidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Shipments', href: '/admin/shipments', icon: Package },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
    { name: 'Blockchain', href: '/admin/blockchain', icon: Blocks },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-full bg-blue-900 text-white w-64 flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-800 text-white'
                      : 'text-blue-100 hover:bg-blue-800'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-blue-800">
        <button
          onClick={logout}
          className="flex items-center px-4 py-2 text-blue-100 hover:bg-blue-800 rounded-md w-full"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}