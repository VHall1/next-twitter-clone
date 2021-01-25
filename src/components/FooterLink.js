import Link from "next/link";
import { useRouter } from "next/router";

const FooterLink = ({ children, path }) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Link href={path}>
      <a>{children(isActive)}</a>
    </Link>
  );
};

export default FooterLink;
