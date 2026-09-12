import React from 'react';
import { useAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

export default function RoleBanner() {
  const { user } = useAuth();
  if (!user) return null;

  if (user.role === 'admin') {
    return (
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white border-b border-purple-800/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/30 border border-purple-400/40 text-sm font-bold shadow-xs">
                👑
              </span>
              <div>
                <span className="font-bold text-sm tracking-tight text-purple-100">
                  ADMINISTRATIVE PORTAL
                </span>
                <span className="text-xs text-purple-300 ml-2 hidden md:inline">
                  Full System Governance, Production Planning & Work Order Authorization
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-purple-200">
              <span className="px-2 py-0.5 rounded bg-purple-800/60 border border-purple-700/60 font-semibold">
                ✓ Create Work Orders
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-800/60 border border-purple-700/60 font-semibold">
                ✓ Stock Control
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-800/60 border border-purple-700/60 font-semibold">
                ✓ All Modules
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (user.role === 'operations') {
    return (
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white border-b border-blue-800/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/30 border border-blue-400/40 text-sm font-bold shadow-xs">
                📦
              </span>
              <div>
                <span className="font-bold text-sm tracking-tight text-blue-100">
                  OPERATIONS & LOGISTICS PORTAL
                </span>
                <span className="text-xs text-blue-300 ml-2 hidden md:inline">
                  Warehouse Stock Ledger, Inter-Warehouse Transfers & Production Fulfillment
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-200">
              <span className="px-2 py-0.5 rounded bg-blue-800/60 border border-blue-700/60 font-semibold">
                ✓ + Add Stock
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-800/60 border border-blue-700/60 font-semibold">
                ✓ Dispatch & Receive Transfers
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-400 font-medium">
                ✕ Sales Restricted
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sales User
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white border-b border-emerald-800/50 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/30 border border-emerald-400/40 text-sm font-bold shadow-xs">
              💼
            </span>
            <div>
              <span className="font-bold text-sm tracking-tight text-emerald-100">
                SALES & COMMERCE PORTAL
              </span>
              <span className="text-xs text-emerald-300 ml-2 hidden md:inline">
                Customer Sales Orders, Real-Time Available Stock & Atomic Inventory Reservation
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-200">
            <span className="px-2 py-0.5 rounded bg-emerald-800/60 border border-emerald-700/60 font-semibold">
              ✓ Create Customer Orders
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-800/60 border border-emerald-700/60 font-semibold">
              ✓ Atomic Stock Reservation
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-400 font-medium">
              ✕ Work Orders Restricted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
