// リクエスト用定数
const TARGET_URL = "/api/v2/snapshot/video/contents/search"
const CONTEXT = "magumanakayama"
const USER_AGENT = "magumanakayama"

// 検索URL生成関数
export const generateSearchUrl = (search_info) => {
  const { targets, query, fields, filters, sort, offset, limit } = search_info
  return `${TARGET_URL}?targets=${targets}&q=${query}&fields=${fields}&${filters}&_sort=${sort}&_offset=${offset}&_limit=${limit}&_context=${CONTEXT}&userAgent=${USER_AGENT}`
}