import { useState } from 'react';

import type { ErrorCause } from '../../type/error';

const useFetchPromise = () => {
  const [fetchPromise, setFetchPromise] = useState<Promise<any> | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  // fetch実行関数
  const fetchWithLoading = async (url: string) => {
    setLoading(true);
    return fetch(url)
      .then(res => {
        // レスポンスがエラーの場合はエラーをスロー
        if (!res.ok) throw new Error('Network response was not ok', { cause: res });
        return res.json();
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        return err.cause.json()
          .then((errorData: ErrorCause['body']) => {
            throw new Error('Fetch error', { cause: { status: err.cause.status, body: errorData } });
          })
      })
      .finally(() => setLoading(false));
  };

  return {
    fetchPromise,
    loading,
    beginRequest: (url: string) => setFetchPromise(fetchWithLoading(url)),
  };
};

export default useFetchPromise;