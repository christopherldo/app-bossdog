import "./action.styles.css";

interface ActionProps {
  href: string;
  children: React.ReactNode;
}

export default function Action({ href, children }: ActionProps) {
  return (
    <a className="action" href={href}>
      {children}
    </a>
  );
}
