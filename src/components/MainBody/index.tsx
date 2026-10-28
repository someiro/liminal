import styles from "./MainBody.module.css";
import { Routes, Route } from "react-router-dom";
import { HelloWorld, Guide, Components, ComponentPage } from "../documents";

const MainBody = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/:componentName" element={<ComponentPage />} />
        <Route path="/patterns" element={<h1>/patterns</h1>}/>
        <Route path="/resources" element={<h1>/resources</h1>}/>
      </Routes>
    </div>
  );
}

export default MainBody;
