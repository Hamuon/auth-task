import HomePage from "@/components/templates/HomePage/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

export default function Home() {
  return <HomePage />;
}
