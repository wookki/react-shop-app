"use client";
import { useState } from "react";
import Image from "next/image";
import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";
import styles from "Auth.module.scss";
const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const { router } = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image src={LogoPath} alt="logo" />
        </h1>
        <form className={styles.form} onSubmit={loginUser}>
          Input
          <div className={styles.group}>자동 로그인, 비밀번호 수정</div>
          <div className={styles.buttonGroup}>
            Button
            <div>Button</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginClient;