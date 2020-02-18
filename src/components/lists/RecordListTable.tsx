import React from "react";
import { ListTable, ListTableProps } from "./ListTable";

export interface RecordListTableProps<Doctype> {
  title: ListTableProps<Doctype>["title"];
  columns: ListTableProps<Doctype>["columns"];
  rows: ListTableProps<Doctype>["rows"];
  totalRows: ListTableProps<Doctype>["count"];
  loading: ListTableProps<Doctype>["loading"];
  setPageLimit: ListTableProps<Doctype>["onRowsPerPageChange"];
  fetchPrev: ListTableProps<Doctype>["onPrevPage"];
  fetchNext: ListTableProps<Doctype>["onNextPage"];
}

export function RecordListTable<Doctype>(props: RecordListTableProps<Doctype>) {
  const {
    title,
    columns,
    // props from fetch hooks
    rows,
    loading,
    totalRows,
    setPageLimit,
    fetchPrev,
    fetchNext
  } = props;

  return (
    <ListTable<Doctype>
      pagination
      title={title}
      columns={columns}
      rows={rows}
      count={totalRows}
      loading={loading}
      onPrevPage={fetchPrev}
      onNextPage={fetchNext}
      onRowsPerPageChange={setPageLimit}
    />
  );
}
