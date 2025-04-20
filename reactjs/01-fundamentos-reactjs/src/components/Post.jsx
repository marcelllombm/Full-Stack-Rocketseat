import styles from "./Post.module.css";

export function Post() {
  return (
    <article className="styles.post">
      <header>
        <div className="styles.author">
          <img
            className={styles.avatar}
            src="https://github.com/marcelllombm.png"
            alt="Marcelo"
          />

          <div className="styles.authorInfo">
            <strong>Marcelo Borges</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="20 abril às 07:27h" dateTime="2025-04-20">
          Públicado há 1h
        </time>
      </header>
      <div className="styles.content">
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>👉 jane.design/doctorcare </p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </article>
  );
}
