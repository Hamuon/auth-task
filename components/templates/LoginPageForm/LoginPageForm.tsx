"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import useLoading from "@/hooks/useLoading";
import BaseButton from "@/components/material/buttons/BaseButton/Base.button";
import BaseInput from "@/components/material/inputs/BaseInput/Base.input";
import { validatePhone } from "@/utils/PhoneValodation";
import { login } from "@/data/Login/Login";
import styles from "./LoginPageForm.module.scss";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const { loading, setLoading } = useLoading();

  const handleLogin = async () => {
    setLoading(true);
    if (!validatePhone(phone)) {
      setLoading(false);
      toast.error("شماره تلفن معتبر نیست");
      return;
    }
    await login().then((res) => {
      if (res.success) {
        setLoading(false);
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
        <BaseButton loading={loading} type="button" onClick={handleLogin}>
          ورود
        </BaseButton>
      </form>
    </main>
  );
}
