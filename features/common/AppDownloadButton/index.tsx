import classNames from "classnames";
import { CSSProperties, memo, PropsWithoutRef, useMemo, useState } from "react";
// @ts-ignore
import AppStoreDarkIcon from "../assets/app-store-dark.svg";
// @ts-ignore
import AppStoreLightIcon from "../assets/app-store-light.svg";
// @ts-ignore
import CHPlayDarkIcon from "../assets/ch-play-dark.svg";
// @ts-ignore
import CHPlayLightIcon from "../assets/ch-play-light.svg";
import "./style.scss";
import AppStoreIcon from "./AppStoreIcon";
import CHPlayIcon from "./CHPlayIcon";

const AppDownloadButton = (props: PropsWithoutRef<{
  link?: string; source: "chplay" | "appstore"; className?: string; linkStyle?: CSSProperties;
  color?: string; hoverColor?: string;
  background?: string; hoverBackround?: string;
  border?: string; hoverBorder?: string;
}>) => {
  const {
    link, source, className, linkStyle,
    color, hoverColor,
    background, hoverBackround,
    border, hoverBorder
  } = props;
  const [hover, setHover] = useState(false);
  return (<a href={link} target="_blank" className="plain-anchor-tag" style={{ ...linkStyle }}>
    <div
      className={classNames("app-download-btn", className || '')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: hover ? hoverColor : color,
        background: hover ? hoverBackround : background,
        border: hover ? hoverBorder : border
      }}
    >
      {source === "chplay"
        ? <CHPlayIcon color={hover ? hoverColor : color} />
        : <AppStoreIcon color={hover ? hoverColor : color} />}
      <div className="app-download-desc">
        <div className="app-download-cta">{source === "chplay" ? "GET IT ON" : "Download on the"}</div>
        <div className="app-download-src">{source === "chplay" ? "Google Play" : "App Store"}</div>
      </div>
    </div>
  </a>)
}

export default memo(AppDownloadButton);