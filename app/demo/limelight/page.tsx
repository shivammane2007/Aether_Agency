"use client";

import { LimelightNav, NavItem } from "@/components/ui/limelight-nav";
import { Home, Bookmark, PlusCircle, User, Settings } from 'lucide-react';

const customNavItems = [
  { id: 'home', icon: <Home />, label: 'Home', onClick: () => console.log('Home Clicked!') },
  { id: 'bookmark', icon: <Bookmark />, label: 'Bookmarks', onClick: () => console.log('Bookmark Clicked!') },
  { id: 'add', icon: <PlusCircle />, label: 'Add New', onClick: () => console.log('Add Clicked!') },
  { id: 'profile', icon: <User />, label: 'Profile', onClick: () => console.log('Profile Clicked!') },
  { id: 'settings', icon: <Settings />, label: 'Settings', onClick: () => console.log('Settings Clicked!') },
];

export default function LimelightDemoPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-12 p-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-white">Limelight Navbar Primitive</h1>
        <p className="text-gray-400">Premium adaptive-width navigation with dynamic lighting effects.</p>
      </div>

      <div className="flex flex-col gap-16 items-center w-full max-w-2xl">
        <div className="space-y-4 w-full text-center">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Default Version</h2>
          <div className="flex justify-center">
             <LimelightNav />
          </div>
        </div>

        <div className="space-y-4 w-full text-center">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Customized & Dark</h2>
          <div className="flex justify-center">
            <LimelightNav 
                className="bg-[#050505] border-[#1a1a1a] rounded-2xl" 
                limelightClassName="bg-[#0070f3] shadow-[0_45px_25px_rgba(0,112,243,0.6)]"
                items={customNavItems} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
