import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/blog.png" alt="lama blog" width={200} height={120} />
          <h1 className={styles.logoText}></h1>
        </div>
        <p className={styles.desc}>
        Discover people's blogs and explore a world of ideas and insights.
        Connect with creators, share your thoughts, and engage with a community
        passionate about diverse topics and perspectives.
        </p>
        <div className={styles.icons}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
           <Image src="/facebook.png" alt="" width={30} height={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram.png" alt="" width={30} height={30} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <Image src="/tiktok.png" alt="" width={30} height={30} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <Image src="/youtube.png" alt="" width={30} height={30} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;