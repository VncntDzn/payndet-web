/**
 * ActiveLink - the active link component for navigation.
 * @param children - composition props.
 * @param href - route to navigate.
 * @param className - style of this component.
 */
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

const ActiveLink = ({ children, href = "/", className }) => {
  const router = useRouter();
  const CONDITION = router.pathname === href ? `${className}` : "text-white";
  return (
    <Link href={href}>
      <a className={`font-extrabold hover:text-red-500 ${CONDITION}`}>
        {children}
      </a>
    </Link>
  );
};

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
export default ActiveLink;
