import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ServiceContainer } from "../../services/common";
import { Route, Doctype } from "../../constants";

export function makeUseUpsertRecord<Document>({
  doctype,
  route
}: {
  doctype: Doctype;
  route: Route;
}) {
  return () => {
    const mountedRef = useRef(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
      mountedRef.current = true;
      return () => {
        mountedRef.current = false;
      };
    }, []);

    const upsert = async (doc: Document) => {
      try {
        mountedRef.current && setLoading(true);

        const service = ServiceContainer.get(doctype);
        const { _id } = await service.upsert(doc);

        mountedRef.current && setLoading(false);
        history.push(`${route}/${_id}`);
      } catch (e) {
        mountedRef.current && setError(e.message);
      }
    };

    return {
      loading,
      upsert,
      error
    };
  };
}
