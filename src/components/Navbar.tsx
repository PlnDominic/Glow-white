"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-[0px_20px_40px_rgba(25,28,30,0.06)] flex justify-between items-center px-6 md:px-12 h-20 max-w-full">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpeg" alt="GloWhite Dental" style={{ height: 44, width: "auto", borderRadius: 8 }} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive
                    ? "text-blue-700 font-bold border-b-2 border-blue-700"
                    : "text-slate-600 font-medium hover:text-blue-800"
                } transition-all duration-200 label-md font-body tracking-normal`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/booking"
            className="hidden sm:inline-flex bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md"
          >
            Book Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8 pt-24">
            <div className="space-y-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-lg font-semibold ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-600 hover:text-blue-700"
                    } transition-colors`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/booking"
                className="block sm:hidden bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-4 rounded-xl font-semibold text-center mt-8 shadow-md"
              >
                Book Appointment
              </Link>
            </div>

            <div className="mt-auto pb-8 border-t border-slate-100 dark:border-slate-800 pt-8">
              <p className="text-sm text-slate-400 font-medium">Contact Us</p>
              <p className="text-slate-600 mt-2 font-semibold font-body">053 964 7100 | 027 184 2345</p>
              <p className="text-slate-500 text-sm mt-1">glowhitedental24@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
