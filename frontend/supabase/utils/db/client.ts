import { createClient } from '@supabase/supabase-js'
import { select_table, insert_table, delete_record } from './operate.ts'

// SupabaseのURLと公開可能なAPIキー
const SUPABASE_URL = 'https://qodmyvcgrpnmckynlccf.supabase.co'
const SUPABASE_KEY = 'sb_publishable_HVfmEm1zpQRRyNjAONS5Dw_0OxCStZ8'

// Supabaseクライアントの作成
const create_client = () => {
  return createClient(SUPABASE_URL, SUPABASE_KEY)
}

const create_func = (supabase: any) => {
  return {
    select: select_table(supabase),
    insert: insert_table(supabase),
    delete_record: delete_record(supabase),
  }
}

export const setup_supabase = () => {
  const supabase = create_client();
  return create_func(supabase)
}