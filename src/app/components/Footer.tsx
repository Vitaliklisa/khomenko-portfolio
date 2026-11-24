import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-signature" href="/">
          Vitalii Khomenko © 2026
        </Link>
        <nav className="footer-links" aria-label="Social links">
          <a href="https://github.com/Vitaliklisa" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vitaliikhomenko/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:vhomenko119@gmail.com">Email</a>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
