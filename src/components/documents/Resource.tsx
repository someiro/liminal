import { Spacer } from "../liminal";

const HelloWorld = () => {
  return (
    <>
      <h2>リソース</h2>
      <Spacer size={20} />
      <h4>React </h4>
      <Spacer size={20} />
      <ul>
        <li>React - https://react.dev/</li>
      </ul>
      <Spacer size={40} />
      <h4>TypeScript </h4>
      <Spacer size={20} />
      <ul>
        <li>TypeScript - https://www.typescriptlang.org/</li>
      </ul>
      <Spacer size={40} />
      <h4>GitHub</h4>
      <Spacer size={20} />
      <ul>
        <li>liminal - https://github.com/someiro/liminal/</li>
      </ul>
      <Spacer size={40} />
      <h4>実例</h4>
      <Spacer size={20} />
      <ul>
        <li>nakaba - https://nakaba.some16.com/</li>
        <li>someiro Portfolio - https://some16.com/</li>
      </ul>
    </>
  );
};

export default HelloWorld;
