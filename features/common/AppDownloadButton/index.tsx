import { memo, PropsWithoutRef, useMemo, useState } from "react";
// @ts-ignore
import AppStoreDarkIcon from "../assets/app-store-dark.svg";
// @ts-ignore
import AppStoreLightIcon from "../assets/app-store-light.svg";
// @ts-ignore
import CHPlayDarkIcon from "../assets/ch-play-dark.svg";
// @ts-ignore
import CHPlayLightIcon from "../assets/ch-play-light.svg";
import "./style.scss";
import classNames from "classnames";

const AppDownloadButton = (props: PropsWithoutRef<{
  link?: string; source: "chplay" | "appstore"; className?: string
}>) => {
  const { link, source, className } = props;
  const icons = useMemo(() => ({
    iconDark: source === "chplay" ? CHPlayDarkIcon : AppStoreDarkIcon,
    iconLight: source === "chplay" ? CHPlayLightIcon : AppStoreLightIcon
  }), [source]);
  const [hover, setHover] = useState(false);
  return (<a href={link} target="_blank" className="plain-anchor-tag">
    <div className={classNames("app-download-btn", className || '')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={hover ? icons.iconLight : icons.iconDark} alt={source} className="app-download-icon" />
      <div className="app-download-desc">
        <div className="app-download-cta">Get on the</div>
        <div className="app-download-src">{source === "chplay" ? "Google Play" : "App Store"}</div>
      </div>
    </div>
  </a>)
}

export default memo(AppDownloadButton);