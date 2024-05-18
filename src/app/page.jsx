import BlogsList from "../components/ListBlogs/BlogList";
import styles from "./home.module.css"
export default function Home() {
  return  (
    <div className="container">
      <div className={styles.content}>
      <BlogsList/>
      </div>
      </div>
  )
}