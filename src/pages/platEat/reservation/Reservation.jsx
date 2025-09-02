import { Paper, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import GroomingReservationTable from './GroomingReservationTable';
import HotelReservationTable from './HotelReservationTable';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const Reservation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs()); // 오늘 날짜 기본값

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ width: '100%' }}>
        {/* 탭 */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="reservation tabs">
            <Tab label="강아지 호텔 예약" />
            <Tab label="애견 미용 예약" />
          </Tabs>
        </Box>
        {/* 날짜 선택 */}
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="날짜 선택"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        {/* 탭 콘텐츠 */}
        {activeTab === 0 && (
          <Box sx={{ p: 3 }}>
            <HotelReservationTable date={selectedDate} />
          </Box>
        )}
        {activeTab === 1 && (
          <Box sx={{ p: 3 }}>
            <GroomingReservationTable date={selectedDate} />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Reservation;
