// リクエスト用定数
const TARGET_URL = "/api/v2/snapshot/video/contents/search"
const CONTEXT = "magumanakayama"
const USER_AGENT = "magumanakayama"

// 検索URL生成関数
export const generateSearchUrl = (query: { title: string }) => {

  const SEARCH_INFO = {
    targets: "tags",
    fields: "contentId,title,userId,viewCounter,thumbnailUrl,startTime",
    filters: "filters%5BviewCounter%5D%5Bgte%5D=10000",
    sort: "-viewCounter",
    offset: 0,
    limit: 100,
  }

  const { targets, fields, filters, sort, offset, limit } = SEARCH_INFO;
  const { title } = query;

  return `${TARGET_URL}?targets=${targets}&q=${title}&fields=${fields}&${filters}&_sort=${sort}&_offset=${offset}&_limit=${limit}&_context=${CONTEXT}&userAgent=${USER_AGENT}`
}