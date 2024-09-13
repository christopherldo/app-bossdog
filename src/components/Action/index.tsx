import "./action.styles.css";

interface ActionProps {
  href: string;
  children: React.ReactNode;
  highlighted?: boolean;
}

export default function Action({ href, children, highlighted }: ActionProps) {
  return (
    <a className={["action", highlighted && "highlight"].join(" ")} href={href}>
      {children}
    </a>
  );
}
