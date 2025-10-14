import { NavLink, Outlet } from "react-router";
import { Text } from "../components/Text";
import { Header } from "../core-components/Header";
import { MainContain } from "../core-components/MainContent";

export function LayoutMain() {
  return (
    <>
      <Header />
      <MainContain>
        <Outlet />
      </MainContain>

      <footer className="my-5 md:my-10 ">
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/">
            <Text variant="body-sm-bold" className="text-gray-300">
              Tarefas
            </Text>
          </NavLink>
          <NavLink to="/componentes">
            <Text variant="body-sm-bold" className="text-gray-300">
              Componentes
            </Text>
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
