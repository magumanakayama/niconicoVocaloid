// MUI
import { TextField, Button, Stack } from '@mui/material';

// 汎用コンポーネント
// ToDo: @から始まる絶対パスでインポートできるようにする
import { BackButton, FetchButton } from '../lib/Buttons';

// 検索ボックスコンポーネント
const SearchBox = ({ fetchInstance, searchInstance, generateSearchUrl }) => {
  return (
    <Stack direction="column" sx={{ m: 2 }} spacing={1}>
      <InputField searchInstance={searchInstance} />
      <SearchButtons fetchInstance={fetchInstance} searchInstance={searchInstance} generateSearchUrl={generateSearchUrl} />
    </Stack>
  );
};

export default SearchBox;

// 入力フィールド
const InputField = ({ searchInstance }) => {
  const { query, setQuery } = searchInstance;
  const QUERY_TO_LABEL = {
    title: 'ボカロP',
    // 他のフィールドのラベルもここに追加
  };

  return (
    <Stack direction="row" spacing={1}>
      {Object.keys(query).map(key => (
        <TextField
          key={key}
          label={QUERY_TO_LABEL[key]}
          value={query[key]}
          onChange={e => setQuery({ ...query, [key]: e.target.value })}
          size="small"
        />
      ))}
    </Stack>
  );
};

// 検索用ボタン群
const SearchButtons = ({ fetchInstance, searchInstance, generateSearchUrl }) => {
  // カスタムフックから必要なステート・関数を取得
  // promiseをstateかつキーにすることでuseを制御
  //// promiseが変数だとrequestが変わるたびに再レンダリングされてしまうため発火タイミング制御が難しくなる
  const { loading, beginRequest } = fetchInstance;
  const { query, setQuery, setPrevQuery, diff } = searchInstance;

  // 検索ボタン押下時のハンドラ
  const handleSearch = () => {
    setPrevQuery(query); // 前回の検索語句をステートに保存
    beginRequest(generateSearchUrl(query)); // ページをセットし、フェッチを発火
  };

  // ToDo: ローディング表示にならないのを治す
  // console.log(loading === true);

  return (
    <Stack direction="row" justifyContent="flex-end" spacing={1}>
      <BackButton />
      <DebugButton query={query} setQuery={setQuery} />
      <FetchButton loading={loading} onClick={handleSearch} disabled={!diff} />
    </Stack>
  );
};

// デバッグ用ボタン
const DebugButton = ({ query, setQuery }) => (
  <Button variant="contained" onClick={() => setQuery({ ...query, title: 'r-906' })}>r-906</Button>
);