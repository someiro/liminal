import { SideMenu, MainBody } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <SideMenu />
        <MainBody />
      </div>
    </>
  );
}

export default App;
