import Link from "next/link";
import * as React from "react";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav className="sticky shadow-sm z-50 top-0 h-12 flex items-center bg-white">
        <Link href="/" passHref>
          <a className="hover:opacity-75 p-4 font-semibold text-gray-900">
            Home
          </a>
        </Link>
      </nav>
      <div data-testid="layout-children" className="m-auto max-w-6xl">
        {children}
      </div>
    </div>
  );
}
