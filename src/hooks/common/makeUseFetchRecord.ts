import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { ServiceContainer } from "../../services/common";
import { Doctypes } from "../../constants";

export function makeUseFetchRecordList<Doctype>(doctype: Doctypes) {
  return (id: string) => {
    const [record, setRecord] = useState(undefined);

    const mountedRef = useRef(false);
    const [loading, setLoading] = useState(false);

    const processResult = useMemo(
      () => (data: Doctype) => {
        if (mountedRef.current) {
          setRecord(data);
          setLoading(false);
        }
      },
      []
    );

    const fetch = useCallback(() => {
      const service = ServiceContainer.get(doctype);
      service.get(id).then(processResult);
    }, [id, processResult]);

    useEffect(() => {
      fetch();
    }, []); // eslint-disable-line

    return {
      record,
      loading,
      fetch,
    };
  };
}
