import { lazy, Suspense } from "react";
import { AppShell, Header, Navbar, Title } from "@mantine/core";

import App2 from "second/App2"
//import App1 from 'first/App'

const RemoteApp2 = lazy(() => import("second/App2"));
const RemoteApp1 = lazy(() => import("first/App1"));

const deps = require("../package.json").dependencies;
console.log(deps);

const App = () => {
  return (
    <>
      <AppShell
        padding="md"
        header={
          <Header height={100} p="xs">
            <Title>HOST</Title>
          </Header>
        }
        navbar={
          <Navbar width={{ base: 300 }} height="100vh" p="xs">
            <div>App1</div>
            <div>App2</div>
          </Navbar>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Suspense fallback="Loading">
          <RemoteApp1 />
        </Suspense>
        <Suspense fallback="Loading">
          <RemoteApp2 />
        </Suspense>
      </AppShell>
    </>
  );
};

export default App;
