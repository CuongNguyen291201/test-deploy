import { FC } from "react";
import Layout, { LayoutProps } from "../common/Layout";
import StudyHeader from "./StudyHeader";

const StudyLayout: FC<LayoutProps> = (props) => {
  return (<Layout {...props}>
    <StudyHeader />
    {props.children}
  </Layout>)
}

export default StudyLayout;