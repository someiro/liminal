import styles from "./MainBody.module.css";
import { Routes, Route } from "react-router-dom";
import { HelloWorld, Guide, Components, ComponentPage, Resource } from "../documents";

const MainBody = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/:componentName" element={<ComponentPage />} />
        <Route path="/resources" element={<Resource />} />
      </Routes>
    </div>
  );
}

export default MainBody;
