import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Tab, Tabs, TextField, Typography } from '@mui/material';
import { Box, Grid } from '@mui/system';
import { useState } from 'react';
import HotelReservationTable from './HotelReservationTable';
import GroomingReservationTable from './GroomingReservationTable';

const UserDetail = () => {
  const [activeTab, setActiveTab] = useState(0); // 탭 상태 (0: 호텔, 1: 미용)
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* 왼쪽 영역: 회원 정보 */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, width: '600px' }}>
            {/* ✅ maxWidth 추가 */}
            <Typography variant="h6" gutterBottom>
              회원 정보
            </Typography>
            {/* ✅ Box를 제거하고 TextField들을 Grid item으로 직접 감쌉니다. */}
            <Grid container spacing={2} direction="column">
              <Grid item>
                <TextField sx={{ width: 250 }} fullWidth label="이름" value={'하하'} InputProps={{ readOnly: true }} />
              </Grid>
              <Grid item>
                <TextField sx={{ width: 250 }} fullWidth label="아이디" value={'아아아아'} InputProps={{ readOnly: true }} />
              </Grid>
              <Grid item>
                <TextField sx={{ width: 250 }} fullWidth label="핸드폰" value={'010-1234-5678'} InputProps={{ readOnly: true }} />
              </Grid>
              {/* ✅ 생년월일 TextField */}
              <Grid item>
                <TextField sx={{ width: 250 }} fullWidth label="생년월일" value={'1992.09.25'} InputProps={{ readOnly: true }} />
              </Grid>
              <Grid item>
                <TextField sx={{ width: 250 }} fullWidth label="반려견 이름" value={'초코'} InputProps={{ readOnly: true }} />
              </Grid>
              {/* ✅ 반려견 성별 RadioGroup */}
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">반려견 성별</FormLabel>
                  <RadioGroup row name="dogGender" value="수컷">
                    {' '}
                    {/* '수컷' 또는 '암컷'으로 데이터 바인딩 */}
                    <FormControlLabel value="수컷" control={<Radio />} label="수컷" />
                    <FormControlLabel value="암컷" control={<Radio />} label="암컷" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <TextField sx={{ width: 250 }} fullWidth label="반려견 생일" value={'2020.05.10'} InputProps={{ readOnly: true }} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* 오른쪽 영역: 예약 내역 (탭 포함) */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ width: '800px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={activeTab} onChange={handleTabChange} aria-label="reservation tabs">
                <Tab label="강아지 호텔 예약" />
                <Tab label="애견 미용 예약" />
              </Tabs>
            </Box>

            {/* 탭 콘텐츠 */}
            {activeTab === 0 && (
              <Box sx={{ p: 3 }}>
                {/* 강아지 호텔 예약 테이블 */}
                <HotelReservationTable />
              </Box>
            )}

            {activeTab === 1 && (
              <Box sx={{ p: 3 }}>
                {/* 애견 미용 예약 테이블 */}
                <GroomingReservationTable />
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetail;
