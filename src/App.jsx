import React, { useEffect, useState } from 'react';

const projects = [
  {
    number: '01', category: 'DATA ANALYTICS', tools: 'PYTHON · PANDAS · MATPLOTLIB',
    title: 'Sales Analytics & Visualization Dashboard',
    description: 'Explored more than 10,000 records to surface sales trends and make patterns easier to understand.',
    art: <div className="project-art art-dashboard" aria-hidden="true"><div className="chart-top"><span>SALES INTELLIGENCE</span><span>↗</span></div><div className="chart-bars">{[38,55,49,72,61,85,76,96].map((height, i) => <i key={i} style={{height: `${height}%`}} />)}</div><div className="chart-bottom"><span>10K+<small>RECORDS ANALYZED</small></span><span className="chart-spark">↗</span></div></div>,
  },
  {
    number: '02', category: 'MACHINE LEARNING', tools: 'SCIKIT-LEARN',
    title: 'Machine Learning Prediction System',
    description: 'Built a predictive model with feature engineering, cross-validation, and hyperparameter tuning.',
    art: <div className="project-art art-ml" aria-hidden="true"><div className="ml-orbit orbit-one" /><div className="ml-orbit orbit-two" /><div className="ml-center"><span>85%+</span><small>MODEL ACCURACY</small></div><span className="ml-caption">PREDICTIVE MODEL / 2024</span></div>,
  },
  {
    number: '03', category: 'WEB DEVELOPMENT', tools: 'JAVASCRIPT · NODE.JS · SQL',
    title: 'Full-Stack Web Application',
    description: 'Created a responsive application using REST APIs and a SQL database, with attention to the complete user flow.',
    art: <div className="project-art art-web" aria-hidden="true"><div className="web-window"><div className="window-dots"><i /><i /><i /></div><div className="window-layout"><div className="window-sidebar" /><div className="window-main"><div /><div /><div /></div></div></div><span className="web-caption">DESIGNED TO WORK EVERYWHERE</span></div>,
  },
];

function App() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 720px)').matches);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 720px)');
    const syncVideoForViewport = (event) => setIsMobile(event.matches);
    setIsMobile(mobileQuery.matches);
    mobileQuery.addEventListener('change', syncVideoForViewport);
    return () => mobileQuery.removeEventListener('change', syncVideoForViewport);
  }, []);

  const copyEmail = async () => {
    const email = 'tharunkumarpilla@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement('textarea');
      input.value = email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2200);
  };

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach((item) => item.classList.add('visible')); return; }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <>
    <a className="skip-link" href="#work">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Pilla Tharun Kumar, back to top">PT<span className="brand-dot">.</span></a>
      <nav className="nav-pill" aria-label="Main navigation"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a></nav>
      <span className="header-note">DATA · DESIGN · DISCOVERY</span>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <video className="hero-video" src={isMobile ? '/mobile.mp4' : '/hero-video.mp4'} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> ASPIRING DATA ANALYST & ML PRACTITIONER</div>
          <p className="hello">Hi, I'm</p>
          <h1 id="hero-title">Pilla Tharun Kumar</h1>
          <p className="hero-bio">I turn complex data into clear stories.<br />From thoughtful analysis to practical machine learning, I build work that helps people see what matters.</p>
          <div className="hero-actions"><a className="button button-primary" href="/P_Tharun_Kumar_Resume.pdf" download>Resume <span aria-hidden="true">↗</span></a><a className="button button-glass" href="#contact">Let's Talk <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-bottom" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span className="scroll-mark" /><span>01 / 04</span></div>
      </section>

      <section className="intro-section" aria-label="Introduction">
        <div className="section-wrap intro-inner">
          <div className="intro-label reveal"><p className="section-kicker">A LITTLE ABOUT HOW I THINK</p><span>01 — 04</span></div>
          <div className="intro-grid">
            <p className="intro-statement reveal">Curiosity<br /><em>meets clarity.</em></p>
            <div className="intro-aside reveal"><span className="intro-rule" /><p>I'm an MCA student who finds the story inside the numbers. I clean messy data, test ideas, and turn patterns into insights people can actually use.</p><span className="intro-aside-note">DATA IS BETTER WHEN IT MAKES SENSE.</span></div>
          </div>
        </div>
      </section>

      <div className="data-strip" aria-hidden="true">
        <div className="data-strip-track">
          <div className="data-strip-group">PYTHON <span>✦</span> SQL <span>✦</span> MACHINE LEARNING <span>✦</span> DATA VISUALIZATION <span>✦</span> PANDAS <span>✦</span> INSIGHT <span>✦</span></div>
          <div className="data-strip-group">PYTHON <span>✦</span> SQL <span>✦</span> MACHINE LEARNING <span>✦</span> DATA VISUALIZATION <span>✦</span> PANDAS <span>✦</span> INSIGHT <span>✦</span></div>
        </div>
      </div>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-wrap">
          <div className="section-heading reveal"><div><p className="section-kicker">01 / SELECTED WORK</p><h2 id="work-title">Proof of <em>curiosity.</em></h2></div><p className="section-side-note">Explorations in analytics, prediction, and building for the web.</p></div>
          <div className="project-list">{projects.map((project) => <article key={project.number} className="project-card reveal"><div className="project-visual">{project.art}</div><div className="project-details"><span className="project-index">/{project.number}</span><div className="project-meta"><span>{project.category}</span><span>{project.tools}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><span>PROJECT / {project.number}</span><span aria-hidden="true">↗</span></div></div></article>)}</div>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="section-wrap experience-inner"><div className="experience-heading reveal"><p className="section-kicker">02 / EXPERIENCE</p><h2 id="experience-title">Learning by <em>doing.</em></h2><p>Hands-on work has shaped how I approach every new dataset and problem.</p></div><div className="experience-entry reveal"><div className="experience-topline"><span>01 / INTERNSHIP</span><span>MAY — JUL 2024</span></div><h3>Machine Learning<br />Intern <span aria-hidden="true">↗</span></h3><p className="experience-place">ULEARN · VISAKHAPATNAM</p><p>Built and evaluated 3+ machine learning models, analyzed datasets of 5,000+ records, and helped automate preprocessing in a four-person team.</p><div className="experience-tags"><span>PYTHON</span><span>SCIKIT-LEARN</span><span>DATA ANALYSIS</span></div></div></div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title"><div className="section-wrap about-inner"><div className="about-main reveal"><p className="section-kicker">03 / BEHIND THE WORK</p><div className="about-heading-block"><span className="about-number" aria-hidden="true">03</span><h2 id="about-title">Always learning.<br /><em>Always looking closer.</em></h2></div><div className="about-copy"><p>I'm pursuing a Master of Computer Applications at PB Siddhartha College of Arts and Science, building on a BCA from Aditya Degree College.</p><p>I like work that combines careful thinking with a real-world outcome. Away from the screen, chess, Sudoku, and puzzles keep that curiosity moving.</p></div></div><div className="about-aside reveal"><div className="about-aside-title">MY TOOLKIT <span>↘</span></div><div className="skill-group"><h3>01 / ANALYZE</h3><p>Python · SQL · Pandas · NumPy<br />Statistical Analysis · Data Cleaning</p></div><div className="skill-group"><h3>02 / VISUALIZE</h3><p>Matplotlib · Seaborn<br />Power BI (Basics)</p></div><div className="skill-group"><h3>03 / BUILD & MODEL</h3><p>Scikit-learn · TensorFlow (Basics)<br />JavaScript · HTML · CSS · MySQL · PostgreSQL</p></div><div className="about-aside-foot">LEARNING, ALWAYS <span className="asterisk">✳</span></div></div></div></section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="section-wrap contact-inner"><p className="section-kicker reveal">04 / GET IN TOUCH</p><div className="contact-layout"><h2 id="contact-title" className="reveal">Let's make<br /><em>sense of something.</em></h2><div className="contact-side reveal"><p>Have a project, a question, or an opportunity? I'd love to hear about it.</p><div className="contact-actions"><a className="contact-email" href="mailto:tharunkumarpilla@gmail.com" aria-label="Email Tharun at tharunkumarpilla@gmail.com"><span className="email-text">tharunkumarpilla@gmail.com</span><span aria-hidden="true">↗</span></a><button className="copy-email" type="button" onClick={copyEmail} aria-live="polite">{emailCopied ? 'Email copied ✓' : 'Copy email'}</button></div></div></div><div className="contact-bottom reveal"><span>OPEN TO DATA ANALYST & MACHINE LEARNING OPPORTUNITIES</span><div className="socials"><a href="https://www.linkedin.com/in/tharun-kumar-pilla-608296252/" target="_blank" rel="noopener noreferrer" aria-label="Visit Tharun's LinkedIn profile">LINKEDIN ↗</a><a href="https://github.com/pilla-tharun-kumar" target="_blank" rel="noopener noreferrer" aria-label="Visit Tharun's GitHub profile">GITHUB ↗</a><a href="mailto:tharunkumarpilla@gmail.com">EMAIL ↗</a></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="footer-top"><span>DATA · DESIGN · DISCOVERY</span><a href="#top">BACK TO TOP ↑</a></div><div className="footer-name" aria-label="THARUN">THARUN<span>.</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PILLA THARUN KUMAR</span><a href="mailto:tharunkumarpilla@gmail.com">THARUNKUMARPILLA@GMAIL.COM</a></div></footer>
  </>;
}

export default App;
