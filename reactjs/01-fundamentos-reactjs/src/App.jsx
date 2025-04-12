import { ExternalComponent } from "./ExternalComponent";
function Post() {
  return <h1> Compomente interno</h1>;
}

export function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Post />
      <ExternalComponent />
    </>
  );
}
