import { useState } from 'react'
import { Button } from '@mui/material'
import { useFetch } from './components/useFetch.ts';
import './App.css'

// 検索URL生成関数
import { generateSearchUrl } from './search/constant.ts';

// 動画カード
import VideoCard from './components/utils/VideoCard.tsx';

function App() {
  const [searchUrl, setSearchUrl] = useState('');

  const handleSearch = () => {
    const search_info = {
      targets: "title",
      query: "r-906",
      fields: "contentId,title,userId,viewCounter,thumbnailUrl,startTime",
      filters: "filters%5BviewCounter%5D%5Bgte%5D=10000",
      sort: "-viewCounter",
      offset: 0,
      limit: 3,
    }
    console.log("Url", generateSearchUrl(search_info));
    setSearchUrl(generateSearchUrl(search_info));
  }


  const { data, loading, error } = useFetch(searchUrl);
  console.log("searchUrl", searchUrl);
  console.log("data", data);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {data && data.data.map(item => <VideoCard key={item.contentId} {...item} />)}
    </>
  )
}

export default App