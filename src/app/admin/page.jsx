"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import { deepOrange, deepPurple } from "@mui/material/colors";

import { useAuthContext } from "@/context/AuthContext";
import { StyledAdminPage } from "./admin.style";
import { Edit } from "./edit/Edit";

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <StyledAdminPage>
      <div className="content">
        <AppBar position="static" className="top">
          <Toolbar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
          </Toolbar>
        </AppBar>
        <p>Novo produto</p>
        <Edit />
      </div>
    </StyledAdminPage>
  );
}

export default Page;
