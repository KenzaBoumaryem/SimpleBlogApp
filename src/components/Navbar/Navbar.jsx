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
      <div className={styles.logo}>blogBreeze</div>
      <div className={styles.links}>
      <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/"className={styles.link}>About</Link>
        <Link  href={"/addBlog"}>
        Add Blog
      </Link>
      </div>
      
    
    {/* <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        GTCoding.
      </Link>
      <Link className="bg-white p-2" href={"/addBlog"}>
        Add Blog
      </Link>
    </nav> */}
    </div>
  );
}
