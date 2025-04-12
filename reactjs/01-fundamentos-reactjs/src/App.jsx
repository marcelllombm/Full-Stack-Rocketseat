import { ExternalComponent } from "./ExternalComponent";
function Post({ author, content }) {
  return (
    <>
      <h3> Compomente interno</h3>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  );
}

export function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Post
        author="Marcelo Borges"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis repellendus fuga facere possimus cumque numquam, placeat asperiores? Dignissimos nisi consectetur quidem placeat quo adipisci doloremque odio deserunt nostrum quasi!"
      />
      <Post
        author="Lucas Jo"
        content="novo post:   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint corporis dignissimos vitae perspiciatis repellat quam, asperiores eos possimus, qui officia id nisi ex itaque. Est distinctio officia aliquid velit recusandae."
      />

      <ExternalComponent
        title="Mais um post"
        content="outro conteúdo: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint corporis dignissimos vitae perspiciatis repellat quam, asperiores eos possimus, qui officia id nisi ex itaque. Est distinctio officia aliquid velit recusandae."
      />
    </>
  );
}
