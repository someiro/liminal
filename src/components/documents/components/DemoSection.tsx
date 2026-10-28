import type { ReactNode } from "react";
import { Spacer } from "../../liminal";

type Props = {
  children: ReactNode;
};

const DemoSection = ({ children }: Props) => (
  <>
    <h4>デモ</h4>
    <Spacer size={10} />
    {children}
    <Spacer size={30} />
  </>
);

export default DemoSection;
