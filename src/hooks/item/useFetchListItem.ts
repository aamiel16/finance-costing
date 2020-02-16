import { useEffect, useState } from "react";
import { ServiceContainer } from "../../services/common";
import { DT_ITEM } from "../../constants";

export function useFetchListItem() {
  const [list, setList] = useState({
    rows: [],
    totalRows: 0
  });

  const [limit, setPageLimit] = useState(10);
  const [prevCursor, setPrevCursor] = useState("");
  const [currCursor, setCurrCursor] = useState("");

  const processResult = ({ rows, totalRows, cursor }) => {
    setList({ rows, totalRows });
    setPrevCursor(currCursor);
    setCurrCursor(cursor);
  };

  const fetchFirst = () => {
    const itemService = ServiceContainer.get(DT_ITEM);
    setCurrCursor("");
    itemService.getList({ limit, cursor: "" }).then(processResult);
  };

  const fetchPrev = () => {
    const itemService = ServiceContainer.get(DT_ITEM);
    itemService
      .getList({ limit, cursor: prevCursor, descending: true })
      .then(processResult);
  };

  const fetchNext = () => {
    const itemService = ServiceContainer.get(DT_ITEM);
    itemService.getList({ limit, cursor: currCursor }).then(processResult);
  };

  useEffect(() => {
    fetchNext();
  }, []); // eslint-disable-line

  useEffect(() => {
    fetchFirst();
  }, [limit]); // eslint-disablbe-line

  return {
    ...list,
    setPageLimit,
    fetchFirst,
    fetchPrev,
    fetchNext
  };
}
