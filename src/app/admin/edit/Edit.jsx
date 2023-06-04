"use client";
import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { StyledEdit } from "./Edit.style";

const Edit = () => {
  return (
    <StyledEdit>
      <Card className="edit">
        <p>Detalhes do produto</p>
        <form>
          <div className="flex">
            <TextField
              name="nomeProduto"
              id="nomeProduto"
              label="Nome do produto"
              variant="outlined"
              className="input"
            ></TextField>
            <Select className="input" label="Nome do produto"></Select>
          </div>
        </form>
      </Card>
    </StyledEdit>
  );
};

export { Edit };
