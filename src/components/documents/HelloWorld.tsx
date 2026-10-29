import { Spacer } from "../liminal";

const HelloWorld = () => {
  return (
    <>
      <h2>liminal</h2>
      <Spacer size={5} />

      <p>宣言的 UI コンポーネントライブラリ</p>
      <hr />
      <h3>はじめに</h3>
      <Spacer size={8} />
      <p>
        liminal は、React と TypeScript を活用し、少ない記述でシンプルに UI を構築できます。<br />
        あらゆる要素を、素早く、直感的かつ柔軟に実装できます。
      </p>
    </>
  );
};

export default HelloWorld;
