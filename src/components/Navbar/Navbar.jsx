import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Navbar.module.css"
export default function Navbar() {
  return (

    <div className={styles.container}>
      <div className={styles.logo}>
          <Image src="/blog.png" alt="lama blog" width={200} height={160} />
         
        </div>
      <div className={styles.links}>
      <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/"className={styles.link}>About</Link>
        <Link  href={"/addBlog"}>
        <button class="tw-bg-blue-700 tw-hover:bg-blue-800 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-full">
        Add Blog
        </button>
      </Link>
      </div>
      
    </div>
  );
}
