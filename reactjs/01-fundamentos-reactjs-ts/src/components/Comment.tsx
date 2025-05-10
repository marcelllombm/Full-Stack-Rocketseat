import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLinkCount] = useState(0);
  function handlerDeleteComment() {
    onDeleteComment(content);
  }

  function handlerLinkComment() {
    // ser vc for atualizar uma informaçao e esse  informaçao e depende do valor que ela tinha
    // anteriomente, ou seja depende dela mesma e sempre legal fazer atualizacao usado esse padrao
    // de funçao. como esta em baixo.

    setLinkCount((stateAnterior) => {
      return stateAnterior + 1;
    });
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
              <time title="11 de Maio as 08:13h" dateTime="2025-05-11 08:80:30">
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
