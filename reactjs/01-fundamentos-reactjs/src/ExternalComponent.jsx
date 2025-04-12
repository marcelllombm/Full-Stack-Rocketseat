export function ExternalComponent(props) {
  return (
    <>
      <h3>Componente externo</h3>
      <strong>{props.title}</strong>
      <p>{props.content}</p>
    </>
  );
}
