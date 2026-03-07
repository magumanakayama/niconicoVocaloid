import { useEffect } from 'react';

// フェッチコンポーネント
import FetchComponent from '../lib/FetchComponent';

// カスタムフック
import useFetchPromise from '../components/hook/fetch';

// カスタムコンポーネント
import ErrorInfo from '../search/SearchError';

const GetVovaloidP = () => {
  // フェッチの状態を管理
  const fetchInstance = useFetchPromise();
  const { fetchPromise, beginRequest } = fetchInstance;

  const getRequestKey = new Date().getTime();
  useEffect(() => {
    beginRequest('https://qodmyvcgrpnmckynlccf.supabase.co/functions/v1/database-access');
  }, []);


  return (
    <>
      {fetchPromise && (
        <FetchComponent
          key={getRequestKey}
          promise={fetchPromise}
          Success={renderSuccess}
          Loading={() => <></>}
          Error={ErrorInfo}
        />
      )}
    </>
  )
};

// 成功時はセッションストレージ書き込み
const renderSuccess = (data: any) => {
  sessionStorage.setItem('VocaloidP', JSON.stringify(data.data));
  return <></>;
};

export default GetVovaloidP;