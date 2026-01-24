// テーブルの全データ取得
export const select_table = (supabase: any) => async (table_name: string) => {
  return await supabase.from(table_name).select('*')
}

//　データ挿入
export const insert_table = (supabase: any) => async (table_name: string, data: any) => {
  return await supabase.from(table_name).insert(data)
}

// データ削除
export const delete_record = (supabase: any) => async (table_name: string, id: any) => {
  await supabase.from(table_name).delete().eq('id', id)
} 