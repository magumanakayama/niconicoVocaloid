// MUI
import { Button, Stack, Select, MenuItem } from '@mui/material';

// 汎用コンポーネント
// ToDo: @から始まる絶対パスでインポートできるようにする
import { BackButton, FetchButton } from '../lib/Buttons';

// 検索ボックスコンポーネント
const SearchBox = ({ fetchInstance, searchInstance, generateSearchUrl }) => {
  const VocaloPs = JSON.parse(sessionStorage.getItem('VocaloidP') || '[]');
  return (
    <Stack direction="column" sx={{ m: 2 }} spacing={1}>
      <SelectField searchInstance={searchInstance} VocaloPs={VocaloPs} />
      <SearchButtons fetchInstance={fetchInstance} searchInstance={searchInstance} generateSearchUrl={generateSearchUrl} />
    </Stack>
  );
};

export default SearchBox;

const SelectField = ({ searchInstance, VocaloPs }) => {
  const { query, setQuery } = searchInstance;

  return (
    <Select
      value={query.title}
      label="ボカロP"
      onChange={e => setQuery({ ...query, title: e.target.value })}
    >
      {VocaloPs.map(vp => (
        <MenuItem key={vp.id} value={vp.title}>{vp.title}</MenuItem>
      ))}
    </Select>
  );
};

// 検索用ボタン群
const SearchButtons = ({ fetchInstance, searchInstance, generateSearchUrl }) => {
  // カスタムフックから必要なステート・関数を取得
  // promiseをstateかつキーにすることでuseを制御
  //// promiseが変数だとrequestが変わるたびに再レンダリングされてしまうため発火タイミング制御が難しくなる
  const { loading, beginRequest } = fetchInstance;
  const { query, setPrevQuery, diff } = searchInstance;

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
      <FetchButton loading={loading} onClick={handleSearch} disabled={!diff} />
    </Stack>
  );
};