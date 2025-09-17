import { layoutConfig } from "@/config/layout.config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`bg-neutral-100 border-t border-neutral-200  h-[${layoutConfig.footerHeight}px]`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center h-full">
        <div className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Recepti. Sva prava zadržana.
        </div>

        <div className="flex space-x-6 text-sm">
          <Link href="/recipes" className="hover:text-primary-600 transition">
            Recepti
          </Link>
          <Link
            href="/ingredients"
            className="hover:text-primary-600 transition"
          >
            Ingridijenti
          </Link>
          <Link href="/about" className="hover:text-primary-600 transition">
            O nama
          </Link>
        </div>
      </div>
    </footer>
  );
}
