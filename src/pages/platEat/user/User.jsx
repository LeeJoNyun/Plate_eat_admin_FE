import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import RegisterModal from './RegisterModal';

const User = () => {
  const [userList, setUserList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleEdit = () => {
    navigate('/platEat/userDetail');
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${apiUrl}/user`);
      setUserList(res.data);
    };
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, tableLayout: 'fixed' }} arial-label="simple table">
          <TableHead sx={{ background: 'rgba(22, 119, 255, 0.9)', color: '#fff' }}>
            <TableRow sx={{}}>
              <TableCell sx={{ width: '5%', color: '#fff' }} align="center">
                No
              </TableCell>
              <TableCell sx={{ width: '20%', color: '#fff' }} align="center">
                이름
              </TableCell>
              <TableCell sx={{ width: '25%', color: '#fff' }} align="center">
                아이디
              </TableCell>
              <TableCell sx={{ width: '30%', color: '#fff' }} align="center">
                핸드폰
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
              <TableCell component="th" scope="row" align="center">
                김봉남
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                abcde@naver.com
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                010-1234-5789
              </TableCell>
              <TableCell align="center">
                {/* 수정 버튼 */}
                <IconButton color="primary" onClick={() => handleEdit()}>
                  <EditIcon />
                </IconButton>
                {/* 삭제 버튼 */}
                <IconButton color="error" onClick={() => handleDelete()}>
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
              setOpenModal(true);
            }}
          >
            회원 등록
          </Button>
        </div>
      </Box>
      {openModal && <RegisterModal openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default User;
