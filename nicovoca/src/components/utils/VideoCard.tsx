// MUI
import { Box, Stack } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const VideoCard = (data) => {
  const { title, viewCounter, thumbnailUrl, startTime } = data;
  return (
    <Stack spacing={2} padding={2} direction="row" border="1px solid #ccc" borderRadius="8px" sx={{ width: '100%', maxHeight: 160 }}>
      <img src={thumbnailUrl} alt="thumbnail" />
      <VideoInfos title={title} viewCounter={viewCounter} startTime={startTime} />
    </Stack>
  )
};

const VideoInfos = ({ title, viewCounter, startTime }) => (
  <Stack alignItems={'flex-start'} justifyContent={'space-between'}>
    <Box>{title}</Box>
    <SubInfos startTime={startTime} viewCounter={viewCounter} />
  </Stack>
);
const SubInfos = ({ startTime, viewCounter }) => (
  <Box>
    <PostDate postDate={startTime} />
    <IconInfos viewCount={viewCounter} />
  </Box>
);
const PostDate = ({ postDate }) => <Box>{new Date(postDate).toLocaleDateString()}</Box>;
const IconInfos = ({ viewCount }) => {
  return (
    <Stack direction="row">
      <PlayArrow />
      <Box>{viewCount}</Box>
    </Stack>
  )
}

export default VideoCard;