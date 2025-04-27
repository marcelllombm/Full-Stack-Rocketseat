import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src, alt }) {
  return (
    <img
      alt={alt}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
