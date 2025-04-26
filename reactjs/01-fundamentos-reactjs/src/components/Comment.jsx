import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com./marcelllombm.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelo Borges</strong>
              <time title="11 de Maio as 08:13h" datetime="2025-05-11 08:80:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Delete comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bo Devon, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
