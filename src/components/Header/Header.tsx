import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = (props): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles["header__brand"]}>
        <button
          className={styles["header__brand__toggle"]}
          onClick={() => props.setShow(!props.show)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <span className={styles["header__brand__text"]}>EMS</span>
      </h1>
    </header>
  );
};

export default Header;
