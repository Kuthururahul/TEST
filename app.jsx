const { useState, useEffect, useMemo } = React;

const leaders = [
  { name: "Rahul Gandhi", src: "assets/leaders%20should%20be%20in%20cricles/Rahul%20gandhi.jfif" },
  { name: "Sonia Gandhi", src: "assets/leaders%20should%20be%20in%20cricles/sonia%20gandhi.webp" },
  { name: "Kharge", src: "assets/leaders%20should%20be%20in%20cricles/Kharge.jfif" },
  { name: "Mahesh", src: "assets/leaders%20should%20be%20in%20cricles/mahesh.jfif" },
  { name: "Krishna Rao", src: "assets/leaders%20should%20be%20in%20cricles/krishna%20rao.jfif" },
  { name: "Mennakshi", src: "assets/leaders%20should%20be%20in%20cricles/mennakshi.jfif" },
  { name: "Raghu", src: "assets/Raghu.jfif" },
];

const content = {
  te: {
    nav: {
      about: "గురించి",
      vision: "విజన్",
      campaign: "ప్రచారం",
      contact: "సంప్రదించండి"
    },
    hero: {
      ward: "20వ వార్డు మున్సిపల్ కౌన్సిలర్ అభ్యర్థి",
      municipality: "క్యాథన్‌పల్లి మున్సిపాలిటీ, మంచిర్యాల జిల్లా",
      name: "కూతురు ప్రభాకర్",
      party: "భారత జాతీయ కాంగ్రెస్",
      blessing:
        "తెలంగాణ రాష్ట్ర కాంగ్రెస్ పార్టీ నాయకుల ఆశీస్సులతో ప్రజల సేవలో నిత్యం ముందుండే ప్రజా సేవకుడు కూతురు ప్రభాకర్ గారికి మద్దతు…",
      slogan:
        "చేతి గుర్తుకే మీ అమూల్యమైన ఓటు వేసి అత్యధిక మెజారిటీతో గెలిపించగలరని మనవి",
      banner: "చేతి గుర్తుకే మన ఓటు",
      cta: "చేతి గుర్తుకే మన ఓటు వేసి గెలిపించండి"
    },
    about: {
      title: "అభ్యర్థి గురించి",
      text: "క్యాథన్‌పల్లి & రామకృష్ణాపూర్ అభివృద్ధికి అంకితమైన ప్రజాసేవకుడు కూత్తూరు ప్రభాకర్. ఆయనకు క్యాథన్‌పల్లి & రామకృష్ణాపూర్‌లో అందరికీ మంచి పరిచయం ఉంది; నిజాయితీగా, కష్టసమయంలో ప్రజలకు సహాయం చేసే వ్యక్తిగా గుర్తింపు పొందారు. ఎటువంటి పదవి లేకపోయినా, తన శక్తి మేరకు ప్రజల కోసం నిలబడ్డారు. బాధ్యతాయుత పాలన, సముదాయ సంక్షేమం పై దృష్టితో, ప్రజల కోసం అమలులో సాధ్యమైన పరిష్కారాల ద్వారా జీవన ప్రమాణాలను మెరుగుపర్చాలని ఆయన లక్ష్యం. ప్రజా సేవ, బాధ్యత మరియు అభివృద్ధి ఆయన ప్రధాన లక్ష్యాలు. ఇది ఆయన మొదటి ఎన్నిక; మీ ఆశీస్సులు, మద్దతు ఉంటే మరింతగా సేవ చేయగలరు."
    },
    vision: {
      title: "విజన్ & ప్రాధాన్యతలు",
      items: [
        "శుభ్రమైన తాగునీరు",
        "రోడ్లు & డ్రైనేజీ",
        "పరిశుభ్రత & చెత్త నిర్వహణ",
        "మహిళా భద్రత & బలపరచడం",
        "నిజాయితీ పాలన",
        "ప్రజల సమస్యలకు వేగవంతమైన పరిష్కారాలు",
        "ప్రతి వర్గానికి సమాన అవకాశాలు",
        "పారదర్శకతతో నిధుల వినియోగం"
      ]
    },
    campaign: {
      title: "ప్రచార సమాచారం",
      message:
        "చేతి గుర్తుకే మీ అమూల్యమైన ఓటు వేసి అత్యధిక మెజారిటీతో గెలిపించగలరని మనవి.",
      banner: "చేతి గుర్తుకే మన ఓటు",
      date: "పోలింగ్ తేదీ: 11-02-2026",
      time: "సమయం: ఉ॥ 7:00 గం॥ల నుండి సా॥ 5:00 గం॥ల వరకు",
      countdown: "పోలింగ్ ప్రారంభానికి సమయం"
    },
    footer: "© 2026 కూత్తూరు ప్రభాకర్ ప్రచార కమిటీ. క్యాథన్‌పల్లి ప్రజల కోసం."
  },
  en: {
    nav: {
      about: "About",
      vision: "Vision",
      campaign: "Campaign",
      contact: "Contact"
    },
    hero: {
      ward: "20th Ward Municipal Councillor Candidate",
      municipality: "Kyathanpally & Ramakrishnapur Municipality, Mancherial District",
      name: "Kuthuru Prabhakar",
      party: "Indian National Congress",
      blessing:
        "With the blessings of Telangana Pradesh Congress leaders, a public servant who is always at the forefront of people’s service — support Kuthuru Prabhakar.",
      slogan: "Vote for Hand Symbol",
      banner: "Vote for Hand Symbol",
      cta: "Vote for Hand Symbol & Win"
    },
    about: {
      title: "About Candidate",
      text: "Kuthuru Prabhakar is a dedicated public servant committed to the development of Kyathanpally. With a focus on accountability and community welfare, he aims to improve quality of life through practical solutions and people-first governance. Public service, responsibility, and development are his core goals."
    },
    vision: {
      title: "Vision & Priorities",
      items: [
        "Clean drinking water",
        "Roads & drainage",
        "Sanitation & waste management",
        "Women safety & empowerment",
        "Transparent governance",
        "Faster grievance resolution",
        "Equal opportunities for all",
        "Accountable use of funds",
        "Community participation & public meetings"
      ]
    },
    campaign: {
      title: "Campaign Info",
      message:
        "Please cast your valuable vote for the hand symbol and win with a huge majority.",
      banner: "Vote for Hand Symbol",
      date: "Polling Date: 11-02-2026",
      time: "Time: 7:00 AM to 5:00 PM",
      countdown: "Time until Polling Starts"
    },
    footer: "© 2026 Kuthuru Prabhakar Campaign Committee. For the people of Kyathanpally."
  }
};

function App() {
  const [lang, setLang] = useState("te");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const t = content[lang];

  useEffect(() => {
    const targetDate = new Date("2026-02-11T07:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <div>
      <div className="top-banner">చేతి గుర్తుకే మన ఓటు</div>
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <img src="assets/INC%20logo.jfif" alt="INC Logo" />
            <div className="brand-text">
              <span className="brand-name">{t.hero.name}</span>
              <span className="brand-sub">{t.hero.ward}</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#vision">{t.nav.vision}</a>
            <a href="#campaign">{t.nav.campaign}</a>
            <button className="lang-toggle" onClick={() => setLang(lang === "te" ? "en" : "te")}>
              {lang === "te" ? "English" : "తెలుగు"}
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="hero-top-row">
            <div className="leaders-row leaders-row-top">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className={`leader-avatar${leader.name === "Raghu" ? " leader-large" : ""}`}
                >
                  <img src={leader.src} alt={leader.name} />
                </div>
              ))}
            </div>
            <div className="right-stack">
              <img className="kaka-standalone" src="assets/kaka.png" alt="Kaka" />
              <div className="raghu-standalone">
                <img src="assets/Revanth-Reddy.avif" alt="Revanth Reddy" />
              </div>
            </div>
          </div>
          <div className="hero-grid">
          <div className="hero-content" data-reveal>
            <h2>{t.hero.ward}</h2>
            <p style={{ color: '#6b7280', marginBottom: '10px' }}>{t.hero.municipality}</p>
            <h1>{t.hero.name}</h1>
            <p className="hero-slogan">{t.hero.slogan}</p>
            <a href="#campaign" className="cta-button">{t.hero.cta}</a>
          </div>
          <div className="hero-image" data-reveal>
            <p className="candidate-blessing">{t.hero.blessing}</p>
            <div className="candidate-top-row">
              <div className="candidate-top-circle">
                <img className="candidate-top-photo" src="assets/MP%20vivek%20son.jfif" alt="MP Vivek Son" />
              </div>
              <div className="candidate-top-circle">
                <img className="candidate-top-photo" src="assets/logo3.webp" alt="Congress Logo" />
              </div>
              <div className="candidate-top-circle">
                <img className="candidate-top-photo" src="assets/MP%20vivek2.jpg" alt="MP Vivek" />
              </div>
            </div>
            <img src="assets/candinate%20photo.jfif" alt="Kuthuru Prabhakar" />
          </div>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <div className="section-header" data-reveal>
            <h2 className="section-title">{t.about.title}</h2>
            <div className="section-divider"></div>
          </div>
          <div className="card" data-reveal>
            <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{t.about.text}</p>
          </div>
        </div>
      </section>

      <section id="vision" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header" data-reveal>
            <h2 className="section-title">{t.vision.title}</h2>
            <div className="section-divider"></div>
          </div>
          <div className="card vision-card" data-reveal>
            <ul className="vision-list">
              {t.vision.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="campaign" className="section">
        <div className="container">
          <div className="section-header" data-reveal>
            <h2 className="section-title">{t.campaign.title}</h2>
            <div className="section-divider"></div>
          </div>
          <div className="card" style={{ textAlign: 'center' }} data-reveal>
            <p className="banner-slogan">{t.campaign.banner}</p>
            <p style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '20px' }}>{t.campaign.message}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <span style={{ background: 'var(--saffron)', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: '600' }}>{t.campaign.date}</span>
              <span style={{ background: 'var(--green)', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: '600' }}>{t.campaign.time}</span>
            </div>
            
            <div className="countdown-box">
              <h3>{t.campaign.countdown}</h3>
              <div className="timer">
                <div className="timer-item">
                  <span className="timer-value">{timeLeft.days}</span>
                  <span className="timer-label">{lang === 'te' ? 'రోజులు' : 'Days'}</span>
                </div>
                <div className="timer-item">
                  <span className="timer-value">{timeLeft.hours}</span>
                  <span className="timer-label">{lang === 'te' ? 'గంటలు' : 'Hours'}</span>
                </div>
                <div className="timer-item">
                  <span className="timer-value">{timeLeft.minutes}</span>
                  <span className="timer-label">{lang === 'te' ? 'నిమిషాలు' : 'Mins'}</span>
                </div>
                <div className="timer-item">
                  <span className="timer-value">{timeLeft.seconds}</span>
                  <span className="timer-label">{lang === 'te' ? 'సెకన్లు' : 'Secs'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card campaign-note-card" data-reveal>
            <p className="campaign-note-standout">
              ప్రభాకర్ గారికి ఓటు వేయండి — మీ ఓటు వృథా కాదు.
              <span>ఎప్పుడూ మీ సమస్యల్లో మీతో పాటు నిలబడే నాయకుడు.</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <img src="assets/INC%20logo.jfif" alt="INC Logo" className="footer-logo" />
          <p className="footer-text">{t.footer}</p>
          <p className="footer-contact">📞 9908241998 • మీ సేవలో ఎల్లప్పుడూ అందుబాటులో ఉంటారు</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
