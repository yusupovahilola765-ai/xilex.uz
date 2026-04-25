"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Email yoki parol noto'g'ri!");
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <div className={`glass ${styles.loginBox} animate-fade-in`}>
        <h1 className={styles.title}>Tizimga kirish</h1>
        <p className={styles.subtitle}>Ma'lumotlaringiz to'liq sir saqlanadi.</p>
        
        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email manzil</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="admin@xilex.uz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Parol</label>
            <input 
              type="password" 
              className="input-field" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
            {loading ? "Tekshirilmoqda..." : "Kirish"}
          </button>
        </form>

        <div className={styles.footer}>
          Xilex.uz - Xavfsiz kutubxona platformasi
          <div style={{ marginTop: '12px' }}>
            Akkauntingiz yo'qmi? <Link href="/register" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Ro'yxatdan o'tish</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
