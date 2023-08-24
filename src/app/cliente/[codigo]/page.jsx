"use client";
import Layout from "@/components/Layout";
import { usePathname } from "next/navigation";

export default function Cliente() {
  const path = usePathname();
  return (
    <Layout>
      <div>Codigo = {path}</div>
    </Layout>
  );
}
