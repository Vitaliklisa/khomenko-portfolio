import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Vitalii Khomenko home">
          <span className="wordmark-mark">VK</span>
          <span>
            Vitalii Khomenko <span className="wordmark-domain">/ khomenko.de</span>
          </span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          <Link href="/#projects">Projects</Link>
          <Link href="/#about">About</Link>
          <a className="nav-contact" href="mailto:vhomenko119@gmail.com">
            Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
