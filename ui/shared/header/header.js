import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import HeaderBackground from "./headerBackground";
import NavLink from "./navLink";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={logoImg} alt="logo" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
