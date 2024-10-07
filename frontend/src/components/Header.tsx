import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div>Checkpoint : frontend</div>
      <Link href="/">
        Countries
      </Link>
    </header>
  );
}
