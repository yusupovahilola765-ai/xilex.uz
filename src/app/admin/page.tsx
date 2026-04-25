"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";
import Link from "next/link";

export default function AdminPanel() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("DASHBOARD"); // DASHBOARD, TERM, RESOURCE, USERS

  // Term states
  const [wordUz, setWordUz] = useState("");
  const [wordRu, setWordRu] = useState("");
  const [wordEn, setWordEn] = useState("");
  const [definition, setDefinition] = useState("");
  const [termCategory, setTermCategory] = useState("Kutubxonashunoslik");

  // Resource states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [resourceType, setResourceType] = useState("BOOK");
  const [url, setUrl] = useState("");

  // Stats and Users state
  const [stats, setStats] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (activeTab === "DASHBOARD") {
      fetch("/api/stats")
        .then(res => res.json())
        .then(data => setStats(data))
        .catch(err => console.error(err));
    } else if (activeTab === "USERS") {
      setLoading(true);
      fetch("/api/admin/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [activeTab]);

  if (status === "loading") return <div className={styles.container}>Yuklanmoqda...</div>;

  if (!session || session.user?.role !== "ADMIN") {
    return (
      <div className={styles.container}>
        <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Kirish taqiqlanadi!</h2>
          <p>Bu sahifa faqat administratorlar uchun.</p>
          <Link href="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '16px' }}>Ortga qaytish</Link>
        </div>
      </div>
    );
  }

  const handleTermSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("/api/terms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wordUz, wordRu, wordEn, definition, category: termCategory }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage({ text: "So'z muvaffaqiyatli qo'shildi!", type: "success" });
        setWordUz(""); setWordRu(""); setWordEn(""); setDefinition("");
      } else {
        setMessage({ text: data.message || "Xatolik yuz berdi", type: "error" });
      }
    } catch (err) {
      setMessage({ text: "Server bilan ulanishda xato", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleResourceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, type: resourceType, url }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage({ text: "Resurs muvaffaqiyatli qo'shildi!", type: "success" });
        setTitle(""); setDescription(""); setUrl("");
      } else {
        setMessage({ text: data.message || "Xatolik yuz berdi", type: "error" });
      }
    } catch (err) {
      setMessage({ text: "Server bilan ulanishda xato", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container} style={{ alignItems: 'flex-start', paddingTop: '100px', minHeight: '100vh', paddingBottom: '60px' }}>
      <div className={`glass ${styles.loginBox} animate-fade-in`} style={{ maxWidth: '900px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h1 className={styles.title} style={{ margin: 0 }}>Admin Panel</h1>
          <Link href="/" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Bosh sahifa</Link>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => { setActiveTab("DASHBOARD"); setMessage({text:"", type:""}) }}
            className={activeTab === "DASHBOARD" ? "btn-primary" : styles.btnOutline}
            style={{ flex: 1, padding: '12px', minWidth: '140px' }}
          >
            📊 Statistika
          </button>
          <button 
            onClick={() => { setActiveTab("USERS"); setMessage({text:"", type:""}) }}
            className={activeTab === "USERS" ? "btn-primary" : styles.btnOutline}
            style={{ flex: 1, padding: '12px', minWidth: '140px' }}
          >
            👥 Foydalanuvchilar
          </button>
          <button 
            onClick={() => { setActiveTab("TERM"); setMessage({text:"", type:""}) }}
            className={activeTab === "TERM" ? "btn-primary" : styles.btnOutline}
            style={{ flex: 1, padding: '12px', minWidth: '140px' }}
          >
            📝 Termin Qo'shish
          </button>
          <button 
            onClick={() => { setActiveTab("RESOURCE"); setMessage({text:"", type:""}) }}
            className={activeTab === "RESOURCE" ? "btn-primary" : styles.btnOutline}
            style={{ flex: 1, padding: '12px', minWidth: '140px' }}
          >
            📚 Resurs Qo'shish
          </button>
        </div>
        
        {message.text && (
          <div style={{ 
            background: message.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', 
            color: message.type === 'error' ? '#fca5a5' : '#34d399', 
            padding: '12px', borderRadius: '8px', marginBottom: '24px', textAlign: 'center' 
          }}>
            {message.text}
          </div>
        )}

        {activeTab === "DASHBOARD" && (
          <div className="animate-fade-in">
            <h2 style={{ marginBottom: '24px', color: 'var(--primary)' }}>Tizim ko'rsatkichlari</h2>
            {!stats ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>Yuklanmoqda...</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                <div className="glass" style={{ padding: '24px', textAlign: 'center', borderRadius: '16px' }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>{stats.totalTerms}</div>
                  <div style={{ color: 'var(--text-muted)' }}>Jami Terminlar</div>
                </div>
                <div className="glass" style={{ padding: '24px', textAlign: 'center', borderRadius: '16px' }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: '#3b82f6', marginBottom: '8px' }}>{stats.totalUsers}</div>
                  <div style={{ color: 'var(--text-muted)' }}>Foydalanuvchilar</div>
                </div>
                <div className="glass" style={{ padding: '24px', textAlign: 'center', borderRadius: '16px' }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: '#10b981', marginBottom: '8px' }}>{stats.totalBooks}</div>
                  <div style={{ color: 'var(--text-muted)' }}>Elektron Kitoblar</div>
                </div>
                <div className="glass" style={{ padding: '24px', textAlign: 'center', borderRadius: '16px' }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: '#f59e0b', marginBottom: '8px' }}>{stats.totalArticles}</div>
                  <div style={{ color: 'var(--text-muted)' }}>Ilmiy Maqolalar</div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "USERS" && (
          <div className="animate-fade-in">
            <h2 style={{ marginBottom: '24px', color: 'var(--primary)' }}>Ro'yxatdan o'tgan foydalanuvchilar</h2>
            <div className="glass" style={{ overflowX: 'auto', borderRadius: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '16px 24px', fontWeight: 600 }}>Ism</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600 }}>Email</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600 }}>Rol</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600 }}>Sana</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={4} style={{ padding: '24px', textAlign: 'center' }}>Yuklanmoqda...</td></tr>
                  ) : users.length > 0 ? (
                    users.map((u) => (
                      <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '16px 24px' }}>{u.name}</td>
                        <td style={{ padding: '16px 24px' }}>{u.email}</td>
                        <td style={{ padding: '16px 24px' }}>
                          <span style={{ 
                            background: u.role === 'ADMIN' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                            color: u.role === 'ADMIN' ? '#f59e0b' : '#10b981',
                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                          }}>
                            {u.role}
                          </span>
                        </td>
                        <td style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '14px' }}>
                          {new Date(u.createdAt).toLocaleDateString('uz-UZ')}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan={4} style={{ padding: '24px', textAlign: 'center' }}>Foydalanuvchilar topilmadi.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "TERM" && (
          <form onSubmit={handleTermSubmit} className={`${styles.form} animate-fade-in`}>
            <div className={styles.inputGroup}>
              <label>O'zbekcha atama *</label>
              <input type="text" className="input-field" value={wordUz} onChange={(e) => setWordUz(e.target.value)} required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className={styles.inputGroup}>
                <label>Ruscha tarjimasi</label>
                <input type="text" className="input-field" value={wordRu} onChange={(e) => setWordRu(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Inglizcha tarjimasi</label>
                <input type="text" className="input-field" value={wordEn} onChange={(e) => setWordEn(e.target.value)} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Kategoriya</label>
              <select className="input-field" value={termCategory} onChange={(e) => setTermCategory(e.target.value)} style={{ backgroundColor: 'var(--surface)' }}>
                <option value="Kutubxonashunoslik">Kutubxonashunoslik</option>
                <option value="Arxiv ishi">Arxiv ishi</option>
                <option value="Axborot texnologiyalari">Axborot texnologiyalari</option>
                <option value="Boshqa">Boshqa</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Atama izohi (Ma'nosi) *</label>
              <textarea className="input-field" rows={4} value={definition} onChange={(e) => setDefinition(e.target.value)} required></textarea>
            </div>

            <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
              {loading ? "Saqlanmoqda..." : "Terminni Qo'shish"}
            </button>
          </form>
        )}

        {activeTab === "RESOURCE" && (
          <form onSubmit={handleResourceSubmit} className={`${styles.form} animate-fade-in`}>
            <div className={styles.inputGroup}>
              <label>Resurs nomi (Sarlavha) *</label>
              <input type="text" className="input-field" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className={styles.inputGroup}>
              <label>Turi</label>
              <select className="input-field" value={resourceType} onChange={(e) => setResourceType(e.target.value)} style={{ backgroundColor: 'var(--surface)' }}>
                <option value="BOOK">Elektron Kitob</option>
                <option value="ARTICLE">Ilmiy Maqola</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Manzil (URL) yoki Fayl havolasi</label>
              <input type="text" className="input-field" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
            </div>

            <div className={styles.inputGroup}>
              <label>Qisqacha tavsif (Annotatsiya) *</label>
              <textarea className="input-field" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>

            <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
              {loading ? "Saqlanmoqda..." : "Resursni Qo'shish"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
