"use client";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

export default function HomePage() {
  useEffect(() => {
    const user = getCookie("user");
    if (!user) {
      window.location.replace("/auth");
    }
  }, []);

  return <></>;
}
