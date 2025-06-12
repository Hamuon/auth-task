import HomePage from "@/components/templates/HomePage/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
};

export default function Home() {
  return <HomePage />;
}
