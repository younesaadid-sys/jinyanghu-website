import Image from "next/image";
import Link from "next/link";
import QuoteModal from "./QuoteModal";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-zinc-200 bg-white/95 backdrop-blur md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/jin-yang-hu-logo.png"
            alt="JIN YANG HU"
            width={190}
            height={70}
            className="h-auto w-[180px]"
            priority
          />

          <div className="hidden text-sm text-zinc-500 lg:block">
            Industrial Lifting Solutions
          </div>
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="transition hover:text-orange-500">
            Home
          </Link>

          <Link
            href="/products"
            className="transition hover:text-orange-500"
          >
            Products
          </Link>

          <Link
            href="/#about"
            className="transition hover:text-orange-500"
          >
            About Us
          </Link>

          <Link
            href="/#contact"
            className="transition hover:text-orange-500"
          >
            Contact
          </Link>
        </nav>

        <QuoteModal />
      </div>
    </header>
  );
}