import { useEffect, useState } from 'react';
import { Box, TextField, IconButton, Typography, Button, Grid, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Add, Delete } from '@mui/icons-material';

const VideoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [group, setGroup] = useState('');
  const [season, setSeason] = useState('');
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (index, field, value) => {
    const newVideos = [...videos];
    newVideos[index] = { ...newVideos[index], [field]: value };
    setVideos(newVideos);
  };

  const handleAddRow = () => {
    const nextOrder = videos.length > 0 ? videos[videos.length - 1].no + 1 : 1;
    setVideos([...videos, { no: nextOrder, title: '', youtubeId: '' }]);
  };

  const handleRemoveRow = (index) => {
    const newVideos = [...videos];
    newVideos.splice(index, 1);
    setVideos(newVideos);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        group: group,
        season: season,
        videos: videos.map((v) => ({
          no: v.no, // ✅ order → no 로 변환
          title: v.title,
          youtubeId: v.youtubeId
        }))
      };

      const res = await axios.post(`${apiUrl}/video`, payload);

      window.location.reload();
    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장 실패');
    }
  };
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/video/${id}`);

        // ✅ API 응답이 객체인지 배열인지 확인하여 상태를 설정
        const data = Array.isArray(res.data) ? res.data : [res.data];

        setVideos(data);
        setLoading(false);
        setGroup(data[0].group);
        setSeason(data[0].season);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
        setLoading(false);
      }
    };
    fetchVideoData();
    console.log(videos);
  }, [id, apiUrl]);

  if (loading) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  // ✅ 데이터가 없을 경우
  if (!videos || videos.length === 0) {
    return <div>영상을 찾을 수 없습니다.</div>;
  }

  // ✅ 데이터가 있을 경우, 첫 번째 영상의 공통 정보 표시
  return (
    <Paper sx={{ p: 3, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        영상 상세 정보
      </Typography>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="그룹" value={videos[0].group} InputProps={{ readOnly: true }} />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="시즌" value={videos[0].season} InputProps={{ readOnly: true }} />
        </Grid>
      </Grid>

      {videos.map((video, index) => (
        <Grid container spacing={2} alignItems="center" key={index} mb={1}>
          <Grid item xs={2}>
            <TextField fullWidth label="순번" value={video.no} InputProps={{ readOnly: true }} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="제목" value={video.title} onChange={(e) => handleChange(index, 'title', e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Youtube ID"
              value={video.youtubeId}
              onChange={(e) => handleChange(index, 'youtubeId', e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton color="error" onClick={() => handleRemoveRow(index)}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      <Box mt={2}>
        <Button variant="outlined" startIcon={<Add />} onClick={handleAddRow} sx={{ mr: 2 }}>
          행 추가
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mr: 2 }}>
          저장
        </Button>
        <Button variant="contained" onClick={() => navigate(-1)}>
          돌아가기
        </Button>
      </Box>
    </Paper>
  );
};

export default VideoDetail;
