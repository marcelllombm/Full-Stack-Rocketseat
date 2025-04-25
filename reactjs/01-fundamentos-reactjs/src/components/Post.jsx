import styles from "./Post.module.css";

export function Post({ author }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/marcelllombm.png"
            alt="Marcelo"
          />

          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="20 abril às 07:27h" dateTime="2025-04-20">
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare </a>
        </p>
        <p>
          {" "}
          <a href="#">#novoprojeto</a> <a>#nlw</a> <a>#rocketseat </a>
        </p>
      </div>
    </article>
  );
}
