import React from "react";
import PageHeader from "./PageHeader";
import PageContainer from "./PageContainer";

interface Props {
  title: string;
  children: React.ReactNode;
}

function Page(props: Props) {
  const { title, children } = props;
  return (
    <PageContainer>
      <PageHeader>{title}</PageHeader>
      {children}
    </PageContainer>
  );
}

export default Page;
