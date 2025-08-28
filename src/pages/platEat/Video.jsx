import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Video = () => {
  const navigate = useNavigate();
  // 수정 이벤트
  const handleEdit = (id) => {
    navigate(`/platEat/video/${id}`);
  };

  // 삭제 이벤트
  const handleDelete = (id) => {};
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
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                1
              </TableCell>
              <TableCell align="center">심야식당</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">
                {/* 수정 버튼 */}
                <IconButton color="primary" onClick={() => handleEdit(1)}>
                  <EditIcon />
                </IconButton>
                {/* 삭제 버튼 */}
                <IconButton color="error" onClick={() => handleDelete(1)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
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
