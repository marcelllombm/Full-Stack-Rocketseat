import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLinkCount] = useState(0);
  function handlerDeleteComment() {
    onDeleteComment(content);
  }

  function handlerLinkComment() {
    setLinkCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        alt="Marcelo"
        src="https://github.com/marcelllombm.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelo Borges</strong>
              <time title="11 de Maio as 08:13h" datetime="2025-05-11 08:80:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handlerDeleteComment} title="Delete comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handlerLinkComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
