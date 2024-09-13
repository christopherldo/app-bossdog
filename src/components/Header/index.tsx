import "./header.styles.css";

import Button from "../Button";
import Logo from "../Logo";
import Action from "../Action";

export default function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <Action href="#nft" children="nft" />
        <Action href="#token" children="token" />
        <Action href="#team" children="team" />
        <Action href="#whitepaper" children="whitepaper" highlighted />
        <Button />
      </nav>
    </header>
  );
}
