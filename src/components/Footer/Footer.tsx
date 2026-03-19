import { useLanguage } from '../../contexts/LanguageContext';
import LogoMark from '../LogoMark/LogoMark';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const copy = t.footer.copy.replace('{year}', String(year));

  return (
    <footer className="footer">
      <div className="container footer-inner">

        <a href="#" className="footer-logo" aria-label="Back to top">
          <LogoMark size={26} />
        </a>

        <p className="footer-copy">{copy}</p>

        <div className="footer-links">
          <a href="mailto:mguimfack@hotmail.com">Email</a>
          <span className="footer-sep" aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/melvice-jr-guimfack-b-ing-b91433221?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0sIQZ2uaTF24OxZgIOwycg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="footer-sep" aria-hidden="true">·</span>
          <a href="https://github.com/Melvice" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}
