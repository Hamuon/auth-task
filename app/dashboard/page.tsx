import DashboardWelcome from "@/components/templates/DashbordWelcome/DashboardWelcome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard Page',
};

export default function Dashboard() {
  return <DashboardWelcome />;
}
