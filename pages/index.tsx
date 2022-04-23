import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>resourceful</h1>
      </main>

      <footer className={styles.footer}>Powered by Aunix &amp; Mukkus</footer>
    </div>
  );
};

export default Home;
