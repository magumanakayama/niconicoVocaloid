import { setup_supabase } from './utils/db/client.ts'
import { print_response } from './utils/index.ts'

// Supabaseクライアントの作成
const { select, insert, delete_record } = setup_supabase()

// レコードを追加
const new_todo = { id: 7, title: 'aiueo', contents: false, start_date: '2024-06-01', end_date: '2024-06-02' }
await insert('todos', new_todo)
print_response(await select('todos'));

// 特定のレコードを削除
await delete_record('todos', 7);
print_response(await select('todos'));