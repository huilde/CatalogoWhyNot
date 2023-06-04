"use client";
import React from "react";
import signIn from "../firebase/signin";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { StyledInitialPage } from "./page.style";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };
  return (
    <StyledInitialPage>
      <div className="content" style={{ margin: "auto" }}>
        <div className="form-wrapper">
          <h1 className="title">Entre no catálogo agora :)</h1>
          <form onSubmit={handleForm} className="form">
            <TextField
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              label="E-mail"
              variant="outlined"
            />
            <TextField
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              label="Senha"
              variant="outlined"
            />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </StyledInitialPage>
  );
}

export default Page;
