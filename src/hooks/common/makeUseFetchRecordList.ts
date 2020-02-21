import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { ServiceContainer } from "../../services/common";
import { Doctype } from "../../constants";

export function makeUseFetchRecordList(doctype: Doctype) {
  return () => {
    const [list, setList] = useState({
      rows: [],
      totalRows: 0
    });

    const mountedRef = useRef(false);
    const [loading, setLoading] = useState(false);
    const [limit, setPageLimit] = useState(10);
    const [prevCursor, setPrevCursor] = useState("");
    const [currCursor, setCurrCursor] = useState("");

    const processResult = useMemo(
      () => ({ rows, totalRows, cursor }) => {
        if (mountedRef.current) {
          setList({ rows, totalRows });
          setPrevCursor(currCursor);
          setCurrCursor(cursor);
          setLoading(false);
        }
      },
      [currCursor]
    );

    const fetchFirst = useCallback(() => {
      const service = ServiceContainer.get(doctype);
      setCurrCursor("");
      setLoading(true);
      service.getList({ limit, cursor: "" }).then(processResult);
    }, [limit, processResult]);

    const fetchPrev = useCallback(() => {
      const service = ServiceContainer.get(doctype);
      setLoading(true);
      service
        .getList({ limit, cursor: prevCursor, descending: true })
        .then(processResult);
    }, [limit, prevCursor, processResult]);

    const fetchNext = useCallback(() => {
      const service = ServiceContainer.get(doctype);
      setLoading(true);
      service.getList({ limit, cursor: currCursor }).then(processResult);
    }, [limit, currCursor, processResult]);

    useEffect(() => {
      mountedRef.current = true;
      fetchFirst();
    }, []); // eslint-disable-line

    useEffect(() => {
      if (currCursor) {
        fetchFirst();
      }
    }, [limit]); // eslint-disable-line

    return {
      ...list,
      loading,
      setPageLimit,
      fetchFirst,
      fetchPrev,
      fetchNext
    };
  };
}
