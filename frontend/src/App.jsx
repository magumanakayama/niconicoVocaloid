import { useState } from 'react'
import { Button } from '@mui/material'
import { useFetch } from './components/useFetch';
import './App.css'

function App() {
  const [searchUrl, setSearchUrl] = useState('');

  const handleSearch = () => {
    const target_url = "https://snapshot.search.nicovideo.jp/api/v2/snapshot/video/contents/search"
    const targets = "title"
    const query = "初音ミク"
    const fields = "contentId,title,viewCounter"
    const filters = "filters%5BviewCounter%5D%5Bgte%5D=10000"
    const sort = "-viewCounter"
    const offset = 0
    const limit = 10
    const context = "magumanakayama"
    const userAgent = "magumanakayama"
    const url = `${target_url}?targets=${targets}&q=${query}&fields=${fields}&${filters}&_sort=${sort}&_offset=${offset}&_limit=${limit}&_context=${context}&userAgent=${userAgent}`
    setSearchUrl(url);
  }


  const { data, loading, error } = useFetch(searchUrl);
  console.log("searchUrl", searchUrl);
  console.log("data", data);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </>
  )
}

export default App