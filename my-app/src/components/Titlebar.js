import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";

function TitleBar() {
    return (
        <AppBar position="fixed">
          <Toolbar style={{ justifyContent: 'center', display: 'flex' }}>
            <Typography variant="h6">Border Pass Immigration</Typography>
          </Toolbar>
        </AppBar>
      );
  }
  
  export default TitleBar;

