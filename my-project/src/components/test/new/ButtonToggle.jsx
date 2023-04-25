import React, { useState } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ButtonToggle = () => {
  const [view, setView] = useState("list");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <div>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        style={{ display: "contents" }}
        onChange={handleChange}
      >
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="module" aria-label="module">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ButtonToggle;
