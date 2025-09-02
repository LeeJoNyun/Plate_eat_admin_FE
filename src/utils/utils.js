// utils.js
export const generateReservations = (count, type) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i * 2); // 2일 간격으로 예약일자
    const cost = type === 'hotel' ? 50000 + (i % 5) * 10000 : 30000 + (i % 4) * 5000;
    const status = i % 3 === 0 ? '방문 완료' : '예약 예정';

    data.push({
      id: i,
      date: date.toISOString().split('T')[0],
      cost,
      status
    });
  }
  return data;
};
