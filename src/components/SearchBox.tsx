"use client";

import { useState, useEffect } from "react";
import styles from "../app/page.module.css";

interface Term {
  id: string;
  wordUz: string;
  wordRu: string | null;
  wordEn: string | null;
  definition: string;
  category: string | null;
}

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Barchasi");
  const [results, setResults] = useState<Term[]>([]);
  const [allTerms, setAllTerms] = useState<Term[]>([]); // Tavsiyalar uchun barcha terminlar bazasi
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  // Dastlabki yuklanishda barcha terminlarni olib kelish
  useEffect(() => {
    fetchAllTerms();
  }, []);

  const fetchAllTerms = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/terms`);
      const data = await res.json();
      setResults(data);
      setAllTerms(data); // Saqlab qo'yamiz
    } catch (error) {
      console.error("Xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!query.trim()) {
      fetchAllTerms();
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/terms?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error("Qidiruv xatosi:", error);
    } finally {
      setLoading(false);
    }
  };

  const speak = (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      // O'qitishdan oldin oldingi gapirishlarni to'xtatamiz
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang; 
      utterance.rate = 0.9; // biroz sekinroq o'qiydi
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Kechirasiz, brauzeringiz ovozli o'qishni qo'llab-quvvatlamaydi.");
    }
  };

  // Natijalarni kategoriya bo'yicha saralash
  const filteredResults = categoryFilter === "Barchasi" 
    ? results 
    : results.filter(t => t.category === categoryFilter);

  // Unik kategoriyalarni topish
  const uniqueCategories = ["Barchasi", ...Array.from(new Set(allTerms.map(t => t.category).filter(Boolean)))];

  // AI Tavsiyalarini shakllantirish
  const getRecommendations = () => {
    if (!query || filteredResults.length === 0 || allTerms.length === 0) return [];
    
    const topCategory = filteredResults[0].category;
    const recs = allTerms.filter(t => 
      t.category === topCategory && 
      !filteredResults.find(r => r.id === t.id)
    );
    
    // Tasodifiy 3 tasini tanlash
    return recs.sort(() => 0.5 - Math.random()).slice(0, 3);
  };

  const recommendations = getRecommendations();

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Qidiruv va Filtr */}
      <div style={{ width: '100%', maxWidth: '800px', display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }} className="animate-fade-in delay-200">
        <form onSubmit={handleSearch} className={`glass ${styles.searchBox}`} style={{ flex: 1, margin: 0 }}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Termin yoki kalit so'z kiriting... (masalan: Bibliografiya)" 
            style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value === "") fetchAllTerms();
            }}
          />
          <button type="submit" className="btn-primary" style={{ padding: '14px 32px', borderRadius: '10px' }}>
            {loading ? "Izlanmoqda..." : "Qidirish"}
          </button>
        </form>

        <select 
          className="glass input-field" 
          style={{ width: 'auto', minWidth: '200px', padding: '0 20px', cursor: 'pointer', appearance: 'none' }}
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {uniqueCategories.map(cat => (
            <option key={cat} value={cat} style={{ color: 'black' }}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Results Display */}
      <div style={{ width: '100%', maxWidth: '1000px', marginBottom: '32px', textAlign: 'left' }} className="animate-fade-in delay-300">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
          <h3 style={{ fontSize: '20px', margin: 0 }}>
            {query ? `Qidiruv natijalari: ${filteredResults.length} ta topildi` : `Barcha terminlar (${categoryFilter}): ${filteredResults.length} ta`}
          </h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => setViewMode("table")} 
              className={viewMode === "table" ? "btn-primary" : styles.btnOutline}
              style={{ padding: '8px 16px', fontSize: '14px' }}
            >
              Jadval
            </button>
            <button 
              onClick={() => setViewMode("cards")} 
              className={viewMode === "cards" ? "btn-primary" : styles.btnOutline}
              style={{ padding: '8px 16px', fontSize: '14px' }}
            >
              Kartochkalar
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="glass" style={{ padding: '24px', textAlign: 'center' }}>Yuklanmoqda...</div>
        ) : filteredResults.length > 0 ? (
          viewMode === "table" ? (
            <div className="glass" style={{ overflowX: 'auto', padding: '0', borderRadius: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--primary)', width: '20%' }}>O'zbekcha</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600, width: '15%' }}>Ruscha</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600, width: '15%' }}>Inglizcha</th>
                    <th style={{ padding: '16px 24px', fontWeight: 600, width: '50%' }}>Izoh (Ma'nosi)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((term) => (
                    <tr key={term.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '16px 24px', fontWeight: 600 }}>{term.wordUz}</td>
                      <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {term.wordRu || "-"}
                          {term.wordRu && (
                            <button onClick={() => speak(term.wordRu!, 'ru-RU')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }} title="Tinglash">🔊</button>
                          )}
                        </div>
                      </td>
                      <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {term.wordEn || "-"}
                          {term.wordEn && (
                            <button onClick={() => speak(term.wordEn!, 'en-US')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }} title="Tinglash">🔊</button>
                          )}
                        </div>
                      </td>
                      <td style={{ padding: '16px 24px', fontSize: '14px', lineHeight: 1.5 }}>{term.definition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {filteredResults.map((term) => (
                <div key={term.id} className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h2 style={{ color: 'var(--primary)', fontSize: '20px', fontWeight: 700 }}>{term.wordUz}</h2>
                    <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                      {term.category}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
                    {term.wordRu && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        🇷🇺 {term.wordRu}
                        <button onClick={() => speak(term.wordRu!, 'ru-RU')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>🔊</button>
                      </div>
                    )}
                    {term.wordEn && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        🇬🇧 {term.wordEn}
                        <button onClick={() => speak(term.wordEn!, 'en-US')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>🔊</button>
                      </div>
                    )}
                  </div>
                  
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                    <p style={{ lineHeight: 1.6, fontSize: '14px', margin: 0 }}>{term.definition}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="glass" style={{ padding: '24px', textAlign: 'center' }}>Hech narsa topilmadi. Boshqa so'z bilan urinib ko'ring.</div>
        )}
      </div>

      {/* AI Recommendations Section */}
      {query && recommendations.length > 0 && (
        <div style={{ width: '100%', maxWidth: '1000px', marginBottom: '64px', textAlign: 'left' }} className="animate-fade-in delay-300">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '24px' }}>🤖</span>
            <h3 style={{ fontSize: '20px', margin: 0, color: 'var(--accent)' }}>AI Tavsiyasi: O'xshash terminlar</h3>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {recommendations.map((term) => (
              <div 
                key={term.id} 
                className="glass" 
                style={{ 
                  padding: '20px', 
                  borderRadius: '16px',
                  border: '1px solid rgba(52, 211, 153, 0.3)', // Accent rangi
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => {
                  setQuery(term.wordUz);
                  setLoading(true);
                  fetch(`/api/terms?q=${encodeURIComponent(term.wordUz)}`)
                    .then(r => r.json())
                    .then(d => setResults(d))
                    .finally(() => setLoading(false));
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 style={{ color: 'var(--foreground)', fontSize: '18px', margin: 0 }}>{term.wordUz}</h4>
                  <span style={{ fontSize: '12px', background: 'rgba(52, 211, 153, 0.2)', color: 'var(--accent)', padding: '4px 8px', borderRadius: '4px' }}>
                    Semantik bog'liqlik
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
