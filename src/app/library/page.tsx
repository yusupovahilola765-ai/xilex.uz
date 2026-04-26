"use client";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Link from "next/link";

export default function LibraryPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/resources")
      .then(res => res.json())
      .then(data => { setResources(data); setLoading(false); })
      .catch(err => setLoading(false));
  }, []);

  return (
    <main className={styles.main}>
      <div className="container" style={{ paddingTop: '120px' }}>
        <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>Elektron Kutubxona</h1>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px' }}>Yuklanmoqda...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {resources.length > 0 ? resources.map((res: any) => (
              <div key={res.id} className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
                <span style={{ fontSize: '12px', background: 'var(--primary)', padding: '4px 8px', borderRadius: '4px', marginBottom: '12px', display: 'inline-block' }}>{res.type === 'BOOK' ? 'Kitob' : 'Maqola'}</span>
                <h3 style={{ marginBottom: '12px' }}>{res.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>{res.description}</p>
                <a href={res.url} target="_blank" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>O'qish</a>
              </div>
            )) : <p style={{textAlign: 'center', gridColumn: '1/-1'}}>Hozircha resurslar yo'q.</p>}
          </div>
        )}
      </div>
    </main>
  );
}
