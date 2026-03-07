import './App.css'

// 検索URL生成関数
import { generateSearchUrl } from './search/constant';

// フェッチコンポーネント
import FetchComponent from './lib/FetchComponent';

// カスタムフック
import useFetchPromise from './components/hook/fetch';
import useSearch from './components/hook/search';

// カスタムコンポーネント
import SearchBox from './search/SearchBox';
import ErrorInfo from './search/SearchError';
import VideoCard from './components/utils/VideoCard';

function App() {
  // フェッチの状態を管理
  const fetchInstance = useFetchPromise();
  const { fetchPromise, beginRequest } = fetchInstance;

  // 検索の状態を管理
  const defaultQuery = { title: '' };
  const searchInstance = useSearch(defaultQuery);
  // const { page, setPage, diff } = searchInstance;

  return (
    <>
      {/* 検索ボックス */}
      <SearchBox fetchInstance={fetchInstance} searchInstance={searchInstance} generateSearchUrl={generateSearchUrl} />
      {/* プロミス生成時にフェッチコンポーネントを生成 */}
      {fetchPromise && (
        <FetchComponent
          promise={fetchPromise}
          Success={(searchedList: any) => searchedList.data.map((item: any) => <VideoCard key={item.contentId} {...item} />)}
          Loading={() => <></>}
          Error={ErrorInfo}
        />
      )}
    </>
  )
}

export default App