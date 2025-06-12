"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import BaseButton from "@/components/material/buttons/BaseButton/Base.button";
import BaseInput from "@/components/material/inputs/BaseInput/Base.input";
import { validatePhone } from "@/utils/PhoneValodation";
import { login } from "@/data/Login/Login";
import styles from "./LoginPageForm.module.scss";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      toast.error("شماره تلفن معتبر نیست");
      return;
    }
    await login().then((res) => {
      if (res.success) {
        router.replace("/dashboard");
      }
    });
  };

  return (
    <main className={styles.main}>
      <form className={styles.container}>
        <h1>ورود</h1>
        <BaseInput
          label="شماره تلفن"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <BaseButton type="button" onClick={handleLogin}>
          ورود
        </BaseButton>
      </form>
    </main>
  );
}
