import { useState } from 'react';
import './App.css';
import { BrandIcon } from './icons';
import { person, ventures, research, recognition, leadership, bios, socials } from './content';

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#research', label: 'Research' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#bio', label: 'Bio and headshot' },
  { href: '#contact', label: 'Contact' },
];

function ExternalLink({ href, children, className }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function YearList({ items }) {
  return (
    <ul className="year-list">
      {items.map((item) => (
        <li key={item.title}>
          <span className="year-list-year">{item.year}</span>
          <span className="year-list-title">
            {item.href ? (
              <ExternalLink href={item.href} className="year-list-link">
                {item.title}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </ExternalLink>
            ) : (
              item.title
            )}
            {item.note && <span className="year-list-note">{item.note}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

function BioKit() {
  const [open, setOpen] = useState(null);
  const [copied, setCopied] = useState(false);

  const toggle = (key) => {
    setCopied(false);
    setOpen(open === key ? null : key);
  };

  const copy = () => {
    const text = bios[open].paragraphs.join('\n\n');
    navigator.clipboard
      ?.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="bio-actions">
        {Object.entries(bios).map(([key, bio]) => (
          <button
            key={key}
            type="button"
            className="btn btn-outline"
            aria-expanded={open === key}
            aria-controls="bio-panel"
            onClick={() => toggle(key)}
          >
            {open === key ? `Hide ${bio.label.toLowerCase()}` : `Show ${bio.label.toLowerCase()}`}
          </button>
        ))}
        <ExternalLink href={person.headshotUrl} className="btn btn-solid">
          Download headshot
        </ExternalLink>
      </div>

      {open && (
        <div className="bio-panel" id="bio-panel">
          <div className="bio-panel-head">
            <h3>{bios[open].label}</h3>
            <button type="button" className="btn btn-small" onClick={copy}>
              {copied ? 'Copied' : 'Copy text'}
            </button>
          </div>
          {bios[open].paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      )}
    </>
  );
}

function App() {
  const featured = ventures.featured;

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#top" className="wordmark">{person.name}</a>
          <nav aria-label="Main">
            <ul className="nav-list">
              {NAV.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero">
          <div className="wrap hero-grid">
            <div className="hero-text">
              <h1 className="hero-name">
                Opeyemi
                <br />
                Adeniran
              </h1>
              <p className="hero-intro">{person.intro}</p>
              <div className="hero-cta">
                <ExternalLink href={featured.links[0].href} className="btn btn-solid">
                  Visit She Model Tech
                </ExternalLink>
                <a href="#bio" className="btn btn-outline">Get my bio</a>
              </div>
            </div>

            <figure className="portrait">
              <div className="portrait-stage">
                <img
                  src={person.portrait}
                  alt="Portrait of Opeyemi Adeniran"
                  width="900"
                  height="874"
                  fetchPriority="high"
                />
                <div className="track-box" aria-hidden="true">
                  <span className="track-tag">{person.shortName.toLowerCase()} 0.99</span>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* Ventures */}
        <section id="work" className="section">
          <div className="wrap">
            <h2 className="section-heading">What I'm building</h2>

            <article className="feature">
              <div className="feature-main">
                <p className="feature-role">{featured.role}</p>
                <h3 className="feature-name">{featured.name}</h3>
                <p className="feature-desc">{featured.description}</p>
                <div className="link-row">
                  {featured.links.map((l) => (
                    <ExternalLink key={l.href} href={l.href} className="text-link">{l.label}</ExternalLink>
                  ))}
                </div>
              </div>
              <p className="feature-tagline">{featured.tagline}</p>
            </article>

            {ventures.others.map((v) => (
              <article key={v.name} className="venture">
                <div>
                  <h3 className="venture-name">{v.name}</h3>
                  <p className="venture-role">{v.role}</p>
                </div>
                <div>
                  <p className="venture-desc">{v.description}</p>
                  <div className="link-row">
                    {v.links.map((l) => (
                      <ExternalLink key={l.href} href={l.href} className="text-link">{l.label}</ExternalLink>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Research */}
        <section id="research" className="section section-ink">
          <div className="wrap research-grid">
            <h2 className="section-heading">Research</h2>
            <div className="research-body">
              <p className="research-lead">{research.summary}</p>
              <p>{research.focus}</p>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section id="recognition" className="section">
          <div className="wrap">
            <h2 className="section-heading">Recognition</h2>
            <div className="recognition-grid">
              <div>
                <h3 className="list-heading">Honors</h3>
                <YearList items={recognition.honors} />
                <h3 className="list-heading list-heading-spaced">Research</h3>
                <YearList items={recognition.research} />
              </div>
              <div>
                <h3 className="list-heading">Earlier leadership</h3>
                <YearList items={leadership} />
              </div>
            </div>
          </div>
        </section>

        {/* Bio kit */}
        <section id="bio" className="section section-tint">
          <div className="wrap">
            <h2 className="section-heading">Bio and headshot</h2>
            <p className="section-note">
              For event organizers and press. Open a bio to read or copy it.
            </p>
            <BioKit />
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="section">
          <div className="wrap">
            <h2 className="section-heading">Get in touch</h2>
            <p className="section-note">Send me a message on any of these.</p>
            <ul className="contact-list">
              {socials.map((s) => (
                <li key={s.href}>
                  <ExternalLink href={s.href} className={`contact-link contact-${s.icon}`}>
                    <span className="contact-icon"><BrandIcon name={s.icon} size={26} /></span>
                    <span className="contact-text">
                      <span className="contact-label">{s.label}</span>
                      <span className="contact-handle">{s.handle}</span>
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} {person.name}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
