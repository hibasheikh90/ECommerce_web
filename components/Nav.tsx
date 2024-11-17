import React from "react";
import { FiLock } from "react-icons/fi";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Nav() {
  return (
    <div className="flex items-center justify-between bg-emerald-200 px-4 py-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      {/* Logo */}
      <h1 className="font-extrabold text-green-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
        Rivo
      </h1>

      {/* Desktop Navigation */}
      <header className="hidden md:flex">
        <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10">
          <li>
            <Link
              href="/"
              className="text-green-800 hover:underline hover:decoration-green-600 hover:underline-offset-4"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-green-800 hover:underline hover:decoration-green-600 hover:underline-offset-4"
            >
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-green-800 hover:underline hover:decoration-green-600 hover:underline-offset-4"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </header>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger className="md:hidden p-2">
          <Menu size={24} className="text-green-800" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-black text-white p-6">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/"
                className="hover:underline hover:decoration-green-600 hover:underline-offset-4"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:underline hover:decoration-green-600 hover:underline-offset-4"
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:decoration-green-600 hover:underline-offset-4"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>

      {/* Lock Icon and Login Button */}
      <div className="hidden sm:flex items-center gap-4">
        <FiLock className="text-2xl sm:text-3xl text-green-800" />
        <button className="px-4 py-2 sm:px-6 text-green-800 text-sm sm:text-base border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition duration-300">
          LOGIN
        </button>
      </div>
    </div>
  );
}
