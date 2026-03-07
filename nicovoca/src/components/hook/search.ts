import { useState } from 'react';

const useSearch = (defaultQuery: any) => {
  const [query, setQuery] = useState(defaultQuery);
  const [prevQuery, setPrevQuery] = useState(query);

  // ページネーション用のステート
  const [page, setPage] = useState(1);

  return {
    query,
    setQuery,
    page,
    setPage,
    setPrevQuery,
    diff: checkDiff(query, prevQuery),
  };
};

export default useSearch;

// オブジェクトの差分チェック
export const checkDiff = (obj1: any, obj2: any) => JSON.stringify(obj1) !== JSON.stringify(obj2);