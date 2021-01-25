import styles from "../styles/footer.module.scss";
import FooterLink from "./FooterLink";
import {
  HomeIcon,
  HomeIconActive,
  MessagesIcon,
  MessagesIconActive,
  NotificationsIcon,
  NotificationsIconActive,
  SearchIcon,
  SearchIconActive,
} from "./TwitterIcons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterLink path="/">
        {(isActive) => (isActive ? <HomeIconActive /> : <HomeIcon />)}
      </FooterLink>
      <FooterLink path="/search">
        {(isActive) => (isActive ? <SearchIconActive /> : <SearchIcon />)}
      </FooterLink>
      <FooterLink path="/notifications">
        {(isActive) =>
          isActive ? <NotificationsIconActive /> : <NotificationsIcon />
        }
      </FooterLink>
      <FooterLink path="/messages">
        {(isActive) => (isActive ? <MessagesIconActive /> : <MessagesIcon />)}
      </FooterLink>
    </footer>
  );
};

export default Footer;
