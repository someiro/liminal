import styles from "./SideMenu.module.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>liminal</h1>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link to="/">はじめに</Link>
          </li>
          <li>
            <Link to="/guide">導入</Link>
          </li>
          <li>
            <Link to="/components">要素</Link>
          </li>
          <li>
            <Link to="/resources">リソース</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
