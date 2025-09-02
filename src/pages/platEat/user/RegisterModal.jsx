import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box, Grid } from '@mui/system';
import { useState } from 'react';

const RegisterModal = ({ openModal, setOpenModal }) => {
  const [formData, setFormData] = useState({
    // ✅ 입력 필드 상태 추가
    name: '',
    userId: '',
    phone: '',
    birthdate: '',
    dogName: '',
    dogAge: '',
    dogGender: ''
  });
  // 모달 스타일을 위한 기본 설정
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  // 입력 필드 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 회원 등록 핸들러 (모달 내에서 실행)
  const handleRegister = async () => {
    try {
      // TODO: API 호출 로직 추가 (axios.post 등)
      // 예시: await axios.post(`${apiUrl}/user`, formData);
      console.log('회원 등록 데이터:', formData);
      handleClose(); // 모달 닫기
      // TODO: 성공 후 목록 새로고침 또는 상태 업데이트
    } catch (error) {
      console.error('회원 등록 실패:', error);
      // TODO: 실패 처리
    }
  };
  return (
    <>
      <Modal open={openModal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            회원 등록
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="이름" name="name" value={formData.name} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="아이디" name="userId" value={formData.userId} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="핸드폰" name="phone" value={formData.phone} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="생년월일" name="birthdate" value={formData.birthdate} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="반려견 이름" name="dogName" value={formData.dogName} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="반려견 나이" name="dogAge" value={formData.dogAge} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="반려견 성별" name="dogGender" value={formData.dogGender} onChange={handleChange} />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" onClick={handleRegister}>
              등록
            </Button>
            <Button variant="outlined" sx={{ ml: 1 }} onClick={handleClose}>
              취소
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default RegisterModal;
