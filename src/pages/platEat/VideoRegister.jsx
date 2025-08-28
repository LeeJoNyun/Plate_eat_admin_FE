import { useState } from 'react';
import { Box, TextField, IconButton, Typography, Button, Grid, Paper } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VideoRegister = () => {
  const [group, setGroup] = useState('');
  const [season, setSeason] = useState('');
  const [videos, setVideos] = useState([{ order: 1, title: '', youtubeId: '' }]);

  const handleAddRow = () => {
    const nextOrder = videos.length > 0 ? videos[videos.length - 1].order + 1 : 1;
    setVideos([...videos, { order: nextOrder, title: '', youtubeId: '' }]);
  };

  const handleRemoveRow = (index) => {
    const newVideos = [...videos];
    newVideos.splice(index, 1);
    setVideos(newVideos);
  };

  const handleChange = (index, field, value) => {
    const newVideos = [...videos];
    newVideos[index][field] = value;
    setVideos(newVideos);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        group,
        season,
        videos: videos.map((v) => ({
          no: v.order, // ✅ order → no 로 변환
          title: v.title,
          youtubeId: v.youtubeId
        }))
      };

      const res = await axios.post('http://localhost:3001/video', payload);

      navigate('-1');
    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장 실패');
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        영상 등록
      </Typography>

      {/* 공통 입력 */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="그룹" value={group} onChange={(e) => setGroup(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="시즌" value={season} onChange={(e) => setSeason(e.target.value)} />
        </Grid>
      </Grid>

      {/* 영상 Row 입력 */}
      {videos.map((video, index) => (
        <Grid container spacing={2} alignItems="center" key={index} mb={1}>
          {/* 순번 */}
          <Grid item xs={1}>
            <TextField fullWidth label="순번" value={video.order} InputProps={{ readOnly: true }} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="제목" value={video.title} onChange={(e) => handleChange(index, 'title', e.target.value)} />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Youtube ID"
              value={video.youtubeId}
              onChange={(e) => handleChange(index, 'youtubeId', e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton color="error" onClick={() => handleRemoveRow(index)} disabled={videos.length === 1}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      {/* 버튼 영역 */}
      <Box mt={2}>
        <Button variant="outlined" startIcon={<Add />} onClick={handleAddRow} sx={{ mr: 2 }}>
          행 추가
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          저장
        </Button>
      </Box>
    </Paper>
  );
};

export default VideoRegister;
