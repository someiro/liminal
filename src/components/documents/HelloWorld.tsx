import { Spacer } from "../liminal";

const HelloWorld = () => {
  return (
    <>
      <h2>liminal</h2>
      <Spacer size={5} />

      <p>宣言型 React UI フレームワーク</p>
      <hr />
      <h3>はじめに</h3>
      <Spacer size={8} />
      <p>
        liminal は、すべてのユーザーと開発者の「半ば」を担う UI
        表現／基準を定義したものです。
      </p>
      <p>
        React と TypeScript を活用し、少ない記述でシンプルに UI を構築できます。
      </p>
    </>
  );
};

export default HelloWorld;
