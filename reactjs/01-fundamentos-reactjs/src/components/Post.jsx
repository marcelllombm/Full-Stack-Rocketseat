import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar.jsx";
import { Comment } from "./Comment.jsx";

import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana, hein?"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    // imutabilidade - as variáveis não sofrem mutação, nós criamos um novo valor(um novo espaço na memória)
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const publishedDateFromatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDaeRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar alt="Marcelo" src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFromatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDaeRelativeToNow}

          {/* esse codigo e a biblioteca do javascript para data (new Intl.DateTimeFormat)
          new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
          }).format(publishedAt)
          */}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
