import React, { useEffect } from 'react';
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import { ResourceCard } from "../components/molecules/ResourceCard/ResourceCard";
import ThemeSwitcher from "../components/atoms/ThemeSwitcher";
import { initStore } from "../redux/store";
import { collection, getDocs } from 'firebase/firestore';
import { IResource, IAppState } from "../interfaces/Interfaces";
import firebase from "../firebase/firebase";
import { COLLECTIONS } from '../firebase/collections.enum';
import { addNewResource } from '../redux/resources/resourcesActions';
// import { getAllResources } from "../redux/resources/resourcesActions";

const Home: NextPage = () => {
  const { data } = useSelector((state: IAppState) => state.resources);
  const dispatch = useDispatch()
  
  const getResources = async () => {
    const result = await getDocs(collection(firebase.fireStore, COLLECTIONS.RESOURCES));
    const resources: Array<IResource> = []
    result.forEach((doc) => {
      resources.push(doc.data() as IResource);
    });  
    // TODO: change logic in future
    resources.forEach((resource) => {
      dispatch(addNewResource(resource))
    })
  }

  useEffect(() => {
    getResources();
  }, [])

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-indigo-500 dark:to-black">
      <main className={styles.main}>
        <h1 className={styles.title}>
          resourceful
          <span className="mx-4">
            <ThemeSwitcher />
          </span>
        </h1>

        <section className={styles.topResources}>
          {data &&
            data.map((resource: IResource) => (
              <ResourceCard
                title={resource.name}
                imgUrl={resource.previewImgUrl}
                description={resource.description}
              />
            ))}
        </section>
      </main>

      <footer className={styles.footer}>Powered by Aunix &amp; Mukkus</footer>
    </div>
  );
};

Home.getInitialProps = async ({ store }) => {
  // return store?.dispatch(getAllResources());
  return {};
};

export default initStore.withRedux(Home);
