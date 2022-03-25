import { Container } from "@mui/material";
import { PropsWithoutRef } from "react";
import Link from "next/link";
import Image from "next/image";

const MainMenu = (props: PropsWithoutRef<{ logo?: string; homeHref?: string; }>) => {
  const { logo, homeHref = "/" } = props;
  return (<Container maxWidth="xxl">
    <div style={{ height: 100 }}>
      <Link href={homeHref}>
        <a>
          <img src={logo} alt="logo" style={{ width: "auto", height: "100%" }} />
        </a>
      </Link>
    </div>
  </Container>)
}

export default MainMenu;