// レスポンスを出力
export const print_response = (response: any) => {
  if (response.error) {
    console.error(response.error)
  } else {
    console.log(response.data)
  }
}