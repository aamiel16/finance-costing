import React from "react";
import { PageHeader } from "./PageHeader";
import { PageContainer } from "./PageContainer";

export interface PageProps {
  title: string;
  children: React.ReactNode;
}

export function Page(props: PageProps) {
  const { title, children } = props;
  return (
    <PageContainer>
      <PageHeader>{title}</PageHeader>
      {children}
    </PageContainer>
  );
}
