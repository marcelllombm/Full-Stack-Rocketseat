import { Avatar } from "./Avatar.jsx";
import { Comment } from "./Comment.jsx";
import styles from "./Post.module.css";

export function Post(props) {
  console.log(props.author);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar alt="Marcelo" src="https://github.com/marcelllombm.png" />

          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
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

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
