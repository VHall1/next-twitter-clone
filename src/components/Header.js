import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://pbs.twimg.com/profile_images/1293000251964522496/akV0ldck_bigger.jpg"
        alt="Victor"
      />
      <span>Home</span>
    </header>
  );
};

export default Header;
