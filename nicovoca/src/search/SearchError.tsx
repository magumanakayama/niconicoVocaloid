// MUI
import { Box } from '@mui/material';
// 型
import type { ErrorCause } from '../type/error';

// エラーメッセージ表示コンポーネント
const ErrorInfo = ({ error }: { error: Error }) => {
  return (
    <Box sx={{ color: 'red', mt: 2 }}>
      {handleSearchError(error.cause as ErrorCause)}
    </Box>
  );
};

// エラーハンドリング関数
const handleSearchError = ({ status, body }: ErrorCause) => {
  const errorCode = body?.error_description;
  switch (status) {
    case 400:
      if (errorCode === "specify valid applicationId") {
        return 'アプリケーションIDが無効です。システム担当者にお問い合わせください。';
      } else if (errorCode === "keyword parameter is not valid") {
        return 'キーワードパラメータが無効です。';
      }
    case 429:
      return 'リクエストが多すぎます。しばらくしてから再度お試しください。';
    case 500:
      return 'サーバーエラーが発生しました。しばらくしてから再度お試しください。';
    case 503:
      return 'サービスが利用できません。しばらくしてから再度お試しください。';
    default:
      return '検索に失敗しました。しばらくしてから再度お試しください。';
  }
};

export default ErrorInfo;