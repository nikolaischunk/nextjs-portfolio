import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer mt-3">
      <div className="content has-text-centered">
        <p>Nikolai Schunk - 2022</p>
        <Link href="/disclosure">Legal Disclosure</Link>
      </div>
    </footer>
  );
};

export default Footer;
