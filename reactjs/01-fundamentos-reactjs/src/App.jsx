import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Marcelo Borges"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta veniam impedit minus architecto reiciendis provident aspernatur tenetur cum. Earum, odit corporis. Nemo illum, suscipit autem praesentium excepturi assumenda ipsam?"
          />

          <Post
            author="Marcelo Borges"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta veniam impedit minus architecto reiciendis provident aspernatur tenetur cum. Earum, odit corporis. Nemo illum, suscipit autem praesentium excepturi assumenda ipsam?"
          />
        </main>
      </div>
    </>
  );
}
