"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../login/login.module.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Xatolik yuz berdi");
        setLoading(false);
      } else {
        setSuccess("Muvaqqiyatli ro'yxatdan o'tdingiz! Endi tizimga kirishingiz mumkin.");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err) {
      setError("Server bilan ulanishda xatolik!");
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`glass ${styles.loginBox} animate-fade-in`}>
        <h1 className={styles.title}>Ro'yxatdan o'tish</h1>
        <p className={styles.subtitle}>Xilex.uz kutubxonasiga xush kelibsiz!</p>
        
        {error && <div className={styles.error}>{error}</div>}
        {success && (
          <div style={{ 
            background: 'rgba(16, 185, 129, 0.1)', 
            color: '#34d399', 
            padding: '12px', 
            borderRadius: '8px', 
            marginBottom: '24px', 
            textAlign: 'center' 
          }}>
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Ismingiz (F.I.SH)</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="Alisher Navoiy"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email manzil</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="user@xilex.uz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Parol o'ylab toping</label>
            <input 
              type="password" 
              className="input-field" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
            {loading ? "Saqlanmoqda..." : "Ro'yxatdan o'tish"}
          </button>
        </form>

        <div className={styles.footer} style={{ marginTop: '24px' }}>
          Akkauntingiz bormi? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Kirish</Link>
        </div>
      </div>
    </div>
  );
}

