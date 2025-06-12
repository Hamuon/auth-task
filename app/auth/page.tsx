import LoginForm from "@/components/templates/LoginPageForm/LoginPageForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login Page',
};

export default function Auth() {
  return <LoginForm />;
}
