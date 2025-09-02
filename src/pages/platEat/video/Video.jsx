import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

const Video = () => {
  const [videoGroupList, setVideoGroupList] = useState([]);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  // 수정 이벤트
  const handleEdit = (id) => {
    navigate(`/platEat/videoDetail/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${apiUrl}/videoGroup`);
      setVideoGroupList(res.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, tableLayout: 'fixed' }} aria-label="simple table">
          <TableHead sx={{ background: 'rgba(22, 119, 255, 0.9)', color: '#fff' }}>
            <TableRow sx={{}}>
              <TableCell sx={{ width: '5%', color: '#fff' }} align="center">
                No
              </TableCell>
              <TableCell sx={{ width: '50%', color: '#fff' }} align="center">
                그룹
              </TableCell>
              <TableCell sx={{ width: '20%', color: '#fff' }} align="center">
                시즌
              </TableCell>
              <TableCell sx={{ width: '20%', color: '#fff' }} align="center">
                기능
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videoGroupList.length > 0 ? (
              // videoGroupList가 비어있지 않을 경우, map으로 행을 반복 렌더링
              videoGroupList.map((group, idx) => (
                <TableRow key={group._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" align="center">
                    {idx + 1}
                  </TableCell>
                  <TableCell align="center">{group.group}</TableCell>
                  <TableCell align="center">{group.season}</TableCell>
                  <TableCell align="center">
                    {/* 수정 버튼 */}
                    <IconButton color="primary" onClick={() => handleEdit(group._id)}>
                      <EditIcon />
                    </IconButton>
                    {/* 삭제 버튼 */}
                    <IconButton color="error" onClick={() => handleDelete(group._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              // videoGroupList가 비어있을 경우, "데이터가 없습니다" 메시지 표시
              <TableRow>
                <TableCell colSpan={4} align="center">
                  데이터가 없습니다
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ '& button': { m: 1 } }}>
        <div>
          <Button
            variant="contained"
            size="medium"
            onClick={() => {
              navigate('/platEat/videoRegister');
            }}
          >
            비디오 등록
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Video;
