import React from "react";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ChevronLeft";
import { PageHeader } from "./PageHeader";
import { PageContainer } from "./PageContainer";
import { useHistory } from "react-router-dom";

export interface PageProps {
  title: string;
  children: React.ReactNode;
}

export function Page(props: PageProps) {
  const { title, children } = props;
  const history = useHistory();

  const renderBack = () => {
    if (!history.length) {
      return null;
    }

    return (
      <IconButton onClick={history.goBack}>
        <BackIcon />
      </IconButton>
    );
  };

  return (
    <PageContainer>
      <PageHeader>
        {renderBack()}
        {title}
      </PageHeader>
      {children}
    </PageContainer>
  );
}
