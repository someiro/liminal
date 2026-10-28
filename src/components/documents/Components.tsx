import { Spacer } from "../liminal";
import { Link } from "react-router-dom";

const Components = () => {
  return (
    <>
      <h3>要素</h3>
      <Spacer size={20} />
      <h4>コンポーネント一覧</h4>
      <Spacer size={10} />
      <h4>General</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <Link>Button</Link>
        </li>
        <li>
          <Link>Text</Link>
        </li>
      </ul>
      <Spacer size={30} />

      <h4>Form</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <Link>TextField</Link>
        </li>
        <li>
          <Link>TextArea</Link>
        </li>
      </ul>
      <Spacer size={30} />

      <h4>Form</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <Link>TextField</Link>
        </li>
        <li>
          <Link>TextArea</Link>
        </li>
        <li>
          <Link>Checkbox</Link>
        </li>
        <li>
          <Link>Radio</Link>
        </li>
        <li>
          <Link>Switch</Link>
        </li>
        <li>
          <Link>Select</Link>
        </li>
      </ul>
      <Spacer size={30} />

      <h4>Data Display</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <Link>Badge</Link>
        </li>
        <li>
          <Link>Card</Link>
        </li>
      </ul>
      <Spacer size={30} />

      <h4>Layout</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <Link>Container</Link>
        </li>
        <li>
          <Link>CardContainer</Link>
        </li>
        <li>
          <Link>Spacer</Link>
        </li>
        <li>
          <Link>Header</Link>
        </li>
      </ul>
      <Spacer size={30} />

      <h4>Feedback</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <Link>Modal</Link>
        </li>
        <li>
          <Link>Menu</Link>
        </li>
        <li>
          <Link>Loading</Link>
        </li>
        <li>
          <Link>Tabs</Link>
        </li>
        <li>
          <Link>Upload</Link>
        </li>
      </ul>
      <Spacer size={30} />
    </>
  );
};

export default Components;
