"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const NAVBAR = () => {
  return (
    <header className="flex h-16   gap-10 items-center px-4 bg-black">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
        <img
            src="/images/logo-img-2.png"
            alt="Kaichain Logo"
            width={100}
            height={60}
            className="invert-[0.2] sepia-[0.7] brightness-200 hue-rotate-[340deg] object-contain"
          />
        </Link>
        <div className="relative group">
          <button className="flex items-center gap-2 bg-transparent text-white font-bold">
            <span>KAICHAIN TOKEN GENERATOR</span>
            <ChevronDown className="h-5 w-5" />
          </button>
          <div className="absolute hidden group-hover:block mt-2 w-[400px] bg-zinc-900 shadow-md">
            <div className="p-6 grid gap-10">
              <Link
                href="#"
                className="block rounded-md p-3 hover:bg-zinc-800  transition"
              >
                <div className="text-sm font-medium text-white">
                  Create Token
                </div>
                <p className="text-sm text-zinc-400 leading-snug">
                  Generate your custom token with our easy-to-use platform
                </p>
              </Link>
              <Link
                href="#"
                className="block rounded-md p-3 hover:bg-zinc-800  transition"
              >
                <div className="text-sm font-medium text-white">
                  Token Management
                </div>
                <p className="text-sm text-zinc-400 leading-snug">
                  Manage and monitor your existing tokens
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <Link
          href="/pricing"
          className="text-white font-medium transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/features"
          className="text-white font-medium transition-colors"
        >
          Features
        </Link>
        <Link href="/faqs" className="text-white font-medium transition-colors">
          FAQS
        </Link>
      </div>
    </header>
  );
};

export default NAVBAR;
