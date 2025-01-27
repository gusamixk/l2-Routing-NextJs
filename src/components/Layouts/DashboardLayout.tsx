"use client";

import React from "react";
import Link from "next/link";

const adminRoutes = [
  { label: "Customer", path: "/dashboard/customer" },
  { label: "Post", path: "/dashboard/post" },
  { label: "Blog", path: "/dashboard/blog" },
  { label: "User", path: "/dashboard/user" },
  { label: "Product", path: "/dashboard/product" },
  { label: "Store", path: "/dashboard/store" },
];

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="flex gap-5 p-5 justify-between">
        <div className="flex gap-5">
          {adminRoutes.map((route) => (
            <Link key={route.path} href={route.path}>
              {route.label}
            </Link>
          ))}
        </div>
      </nav>
      <main className="p-5">{children}</main>
    </div>
  );
};