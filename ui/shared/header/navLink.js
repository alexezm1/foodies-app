"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      className={
        pathname.startsWith(href)
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}
