import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import HeaderBackground from "./headerBackground";

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
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
