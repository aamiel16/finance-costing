import { useEffect, useState, useCallback, useRef } from "react";
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
    const [page, setPage] = useState(0);
    const [cursorArr, setCursorArr] = useState([]);

    const fetchFirst = useCallback(() => {
      const service = ServiceContainer.get(doctype);
      setLoading(true);
      service
        .getList({ limit, cursor: "" })
        .then(({ rows, totalRows, cursor }) => {
          if (mountedRef.current) {
            setList({ rows, totalRows });
            setCursorArr([cursor]);
            setPage(0);
            setLoading(false);
          }
        });
    }, [limit]);

    const fetchPrev = useCallback(() => {
      const service = ServiceContainer.get(doctype);
      setLoading(true);
      service
        .getList({ limit, cursor: cursorArr[page - 1], descending: true })
        .then(({ rows, totalRows }) => {
          if (mountedRef.current) {
            setList({ rows, totalRows });
            setCursorArr(arr => arr.slice(0, -1));
            setPage(page - 1);
            setLoading(false);
          }
        });
    }, [limit, page, cursorArr]);

    const fetchNext = useCallback(() => {
      const service = ServiceContainer.get(doctype);
      setLoading(true);
      service
        .getList({ limit, cursor: cursorArr[page] })
        .then(({ rows, totalRows, cursor }) => {
          if (mountedRef.current) {
            setList({ rows, totalRows });
            setCursorArr(arr => arr.concat(cursor));
            setPage(page + 1);
            setLoading(false);
          }
        });
    }, [limit, page, cursorArr]);

    useEffect(() => {
      mountedRef.current = true;
      fetchFirst();
    }, []); // eslint-disable-line

    useEffect(() => {
      if (cursorArr.length) {
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
