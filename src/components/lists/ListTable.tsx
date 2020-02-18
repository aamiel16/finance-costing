import React from "react";
import isFn from "lodash/isFunction";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";
import ListTableToolbar from "./ListTableToolbar";
import { Metrics } from "../../constants";

export interface ListTableColumn<DataType> {
  id: string & keyof DataType;
  label: string;
  minWidth?: number;
  align?: TableCellProps["align"];
  format?: (value: number) => string;
}

export interface ListTableProps<DataType> {
  title: string;
  columns: ListTableColumn<DataType>[];
  rows: DataType[];
  count?: number;
  keyField?: string & keyof DataType;
  pagination?: boolean;
  loading?: boolean;
  onPrevPage?: () => void;
  onNextPage?: () => void;
  onRowsPerPageChange?: (limit: number) => void;
}

function ListTable<DataType>(props: ListTableProps<DataType>) {
  const {
    title,
    columns,
    rows,
    count,
    pagination = false,
    loading = false,
    keyField = "_id",
    onPrevPage,
    onNextPage,
    onRowsPerPageChange
  } = props;

  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_, newPage: number) => {
    if (!pagination) return;
    if (page < newPage) {
      isFn(onNextPage) && onNextPage();
    } else {
      isFn(onPrevPage) && onPrevPage();
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!pagination) return;
    const limit = +event.target.value;
    setPage(0);
    setRowsPerPage(limit);
    isFn(onRowsPerPageChange) && onRowsPerPageChange(limit);
  };

  const renderRows = () => {
    if (loading) {
      return (
        <TableRow role="checkbox" tabIndex={-1}>
          <TableCell align="center" colSpan={columns.length}>
            <CircularProgress />
          </TableCell>
        </TableRow>
      );
    }

    return rows.map(row => (
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={(row as any)[keyField]}
      >
        {columns.map(column => {
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof value === "number"
                ? column.format(value)
                : value}
            </TableCell>
          );
        })}
      </TableRow>
    ));
  };

  const renderPagination = () => {
    if (!pagination) {
      return null;
    }

    return (
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={count || rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    );
  };

  return (
    <Paper className={classes.paper}>
      <ListTableToolbar title={title} numSelected={0} />
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{renderRows()}</TableBody>
        </Table>
      </TableContainer>
      {renderPagination()}
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100%"
    },
    container: {
      minHeight: Metrics.maxHeight(theme)(4),
      maxHeight: Metrics.maxHeight(theme)(4)
    }
  })
);

export default ListTable;
