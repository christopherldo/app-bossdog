import "./menu.styles.css";

import Action from "../Action";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="menu">
      <div className="wrapper-actions">
        <Action href="#nft" children="nft" />
        <Action href="#token" children="token" />
        <Action href="#team" children="team" />
        <Action href="#whitepaper" children="whitepaper" highlighted />
      </div>

      <Button />
    </nav>
  );
}
