import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import {ListItemText} from "@mui/material";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const router = useRouter()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250, backgroundColor: "#000000" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="h-screen bg-gradient-to-b from-emerald-700 via-emerald-800 to-emerald-900 z-10"
    >
      <List className="flex flex-col ">
        {["home", "protocol", "governance", "voting","docs"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={`/${text === 'home' ? '' : text}`} prefetch={false} legacyBehavior >
                <a>
                  <ListItemText sx={{fontWeight: 800}} className={router.pathname == `/${text === 'home' ? '' : text}` ? "text-white underline": "text-white"} primary={text.toUpperCase()} />
                </a>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="my-auto z-20">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className="text-white"/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
