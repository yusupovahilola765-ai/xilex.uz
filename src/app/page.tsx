import styles from './page.module.css';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import SearchBox from "@/components/SearchBox";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className={styles.main}>
      <div className={`container ${styles.heroSection}`}>
        
        {/* Navigation / Header Mock */}
        <header className={`glass ${styles.header} animate-fade-in`}>
          <div className={styles.logo}>
            <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Xilex</span>.uz
          </div>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Asosiy</Link>
            <a href="#dictionary" className={styles.navLink}>Lug'at</a>
            <Link href="/library" className={styles.navLink}>Kutubxona</Link>
            <div className={styles.authButtons}>
              {session ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Link href="/admin" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                    {session.user?.name} ({session.user?.role})
                  </Link>
                  {session.user?.role === 'ADMIN' && (
                    <Link href="/admin" className={styles.btnOutline} style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                      Admin Panel
                    </Link>
                  )}
                  <Link href="/api/auth/signout" className={styles.btnOutline}>Chiqish</Link>
                </div>
              ) : (
                <>
                  <Link href="/login" className={styles.btnOutline}>Kirish</Link>
                  <Link href="/register" className="btn-primary">Ro'yxatdan o'tish</Link>
                </>
              )}
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className={styles.content}>
          <h1 className={`animate-fade-in ${styles.title}`}>
            Axborot-kutubxona sohasining <br />
            <span style={{ color: 'var(--primary)' }}>intellektual elektron lug'ati</span>
          </h1>
          <p className={`animate-fade-in delay-100 ${styles.subtitle}`}>
            Kutubxonashunoslik, arxiv ishi va axborot texnologiyalariga oid minglab terminlar, maqolalar va kitoblarni bir joydan toping.
          </p>

          {/* Search Box */}
          <div id="dictionary" style={{ width: '100%', paddingTop: '40px' }}>
            <SearchBox />
          </div>

          {/* Recommended / Stats */}
          <div className={`animate-fade-in delay-300 ${styles.statsSection}`}>
            <div className={styles.statCard}>
              <h3>15,000+</h3>
              <p>Terminlar (Uz/Ru/En)</p>
            </div>
            <div className={styles.statCard}>
              <h3>2,400+</h3>
              <p>Ilmiy maqolalar</p>
            </div>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Elektron kitoblar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Nega aynan Xilex.uz?</h2>
        <div className={styles.grid3}>
          <div className={`glass ${styles.featureCard}`}>
            <div className={styles.iconBox}>🚀</div>
            <h3>Tezkor qidiruv</h3>
            <p>Kutubxona terminlarini soniyalar ichida toping.</p>
          </div>
          <div className={`glass ${styles.featureCard}`}>
            <div className={styles.iconBox}>🌍</div>
            <h3>3 Tilda tarjima</h3>
            <p>O'zbek, Rus va Ingliz tillarida mukammal tarjimalar.</p>
          </div>
          <div className={`glass ${styles.featureCard}`}>
            <div className={styles.iconBox}>🔒</div>
            <h3>Xavfsiz tizim</h3>
            <p>Shaxsiy ma'lumotlaringiz kuchli himoyalangan va sir saqlanadi.</p>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Biz bilan bog'lanish va Joylashuv</h2>
        <div className={`glass ${styles.contactWrapper}`}>
          <div className={styles.contactInfo}>
            <h3>Aloqa ma'lumotlari</h3>
            <p>📍 <strong>Manzil:</strong> Toshkent shahar, Alisher Navoiy nomidagi O'zbekiston Milliy kutubxonasi</p>
            <p>📞 <strong>Telefon:</strong> +998 71 232 83 94</p>
            <p>✉️ <strong>Email:</strong> info@xilex.uz</p>
            <p>🕒 <strong>Ish vaqti:</strong> Dushanba - Juma (09:00 - 18:00)</p>
          </div>
          <div className={styles.mapMockup}>
            {/* Google map iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2996.883726922248!2d69.26620577587483!3d41.31139477131015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2a1a09d17d%3A0xc00f074d2843bb0!2sNational%20Library%20of%20Uzbekistan!5e0!3m2!1sen!2s!4v1714032128913!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Xilex.uz - Axborot-kutubxona terminlarining elektron platformasi. Barcha huquqlar himoyalangan.</p>
      </footer>
    </main>
  );
}
