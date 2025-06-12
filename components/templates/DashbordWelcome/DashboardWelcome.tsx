"use client";
import { deleteCookie } from "cookies-next";
import { toast } from "react-toastify";
import BaseButton from "@/components/material/buttons/BaseButton/Base.button";
import styles from "./DashboardWelcome.module.scss";
import { useRouter } from "next/navigation";

export default function DashboardWelcome() {
  const Router = useRouter();

  const handleLogout = () => {
    toast.success("از حساب خود خارج شدید");
    deleteCookie("user");
    Router.replace("/auth");
  };

  return (
    <main className={styles.main}>
      <h1>به داشبورد خوش آمدید!</h1>
      <BaseButton onClick={handleLogout}>خروج</BaseButton>
    </main>
  );
}
