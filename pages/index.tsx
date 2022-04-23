import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { ResourceCard } from "../components/molecules/ResourceCard/ResourceCard";
import ThemeSwitcher from "../components/atoms/ThemeSwitcher";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-indigo-500 dark:to-black">
      <main className={styles.main}>
        <h1 className={styles.title}>
          resourceful
          <span className="mx-4">
            <ThemeSwitcher></ThemeSwitcher>
          </span>
        </h1>

        <section className={styles.topResources}>
          {/* temporary content */}
          <ResourceCard
            title="Meet Anukritik"
            imgUrl="/images/aunixWebsite.png"
            content="Portfolio of Anukritik, an experienced Software engineer. I have a passion for coding, and enjoy bringing ideas to life in the browser."
          />
          <ResourceCard
            title="Meet Mayank"
            imgUrl="/images/mukkusWebsite.png"
            content="Portfolio of Mayank Agrawal, an experienced Software engineer."
          />
        </section>
      </main>

      <footer className={styles.footer}>Powered by Aunix &amp; Mukkus</footer>
    </div>
  );
};

export default Home;
