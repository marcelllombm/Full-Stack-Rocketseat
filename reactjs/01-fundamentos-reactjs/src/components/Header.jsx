import styles from "./header.module.css";

console.log(styles);
export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
