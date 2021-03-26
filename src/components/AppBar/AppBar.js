import { useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Toggle from "../Toggle/Toggle";

import s from "./AppBar.module.css";

export default function AppBar({ navItems, logoImage, minimazed = false }) {
  const [isMinimize, setIsMinimize] = useState(minimazed);
  const toggle = () => setIsMinimize((state) => !state);

  return (
    <div className={`${s.appbar} ${isMinimize ? s.minimized : ""}`}>
      <div className={s.logoThumb}>
        <Logo imageUrl={logoImage} />
      </div>
      <div className={s.content}>
        <Toggle reversed={isMinimize} onClick={toggle} />
        <Navigation items={navItems} />
      </div>
    </div>
  );
}
