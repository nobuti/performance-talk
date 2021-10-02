import React, { useEffect, useState } from "react";
import { Button, MainHeader } from "@jobandtalent/design-system";
import { createServer } from "miragejs";

import Container from "components/Container";

import styles from "styles.module.css";

const Users = ({ users }) => {
  return (
    <div className={styles.table}>
      {users.map((u) => {
        return (
          <div key={u.email} className={styles.row}>
            <div className={styles.cell}>{u.name}</div>
            <div className={styles.cell}>{u.email}</div>
          </div>
        );
      })}
    </div>
  );
};

const payload = [
  {
    name: "Mortadelo",
    email: "mortadelo@jobandtalent.com",
  },
  {
    name: "Filemón",
    email: "filemon@jobandtalent.com",
  },
  {
    name: "Súper",
    email: "super@jobandtalent.com",
  },
  {
    name: "Ofelia",
    email: "ofelia@jobandtalent.com",
  },
];

function App() {
  const [users, setUsers] = useState(payload);

  useEffect(() => {
    const server = createServer({
      routes() {
        this.get("/users", () => payload);
      },
    });

    return () => {
      server.shutdown();
    };
  }, []);

  const getUsers = () =>
    fetch("/users")
      .then((response) => response.json())
      .then(setUsers);

  return (
    <Container>
      <MainHeader title="React DevTools Profiler">
        <Button onSelect={getUsers} tiny>
          Refresh
        </Button>
      </MainHeader>
      <Users users={users} />
    </Container>
  );
}

export default App;
