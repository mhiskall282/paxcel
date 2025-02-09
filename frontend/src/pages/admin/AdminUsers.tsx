import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import UserList from '../../components/users/UserList';
import UserForm from '../../components/users/UserForm';
import UserStats from '../../components/users/UserStats';
import { //Users, 
Plus } from 'lucide-react';

export default function AdminUsers() {
  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <button
              onClick={() => setShowAddUser(true)}
              className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New User
            </button>
          </div>

          <UserStats />
          
          {showAddUser && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
                <UserForm onClose={() => setShowAddUser(false)} />
              </div>
            </div>
          )}

          <UserList />
        </div>
      </div>
    </div>
  );
}