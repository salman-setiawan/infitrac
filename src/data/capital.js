const capitalData = [
  {date: "01/24", circulating: 0, debit: 0, cash: 0},
  {date: "02/24", circulating: 0, debit: 0, cash: 0},
  {date: "03/24", circulating: 0, debit: 0, cash: 0},
  {date: "04/24", circulating: 6122.35, debit: 136.36, cash: 550.00},
  {date: "05/24", circulating: 6834.21, debit: 177.86, cash: 400.00},
  {date: "06/24", circulating: 5877.32, debit: 84.86, cash: 650.00},
  {date: "07/24", circulating: 5857.00, debit: 575.00, cash: 700.00},
  {date: "08/24", circulating: 5503.49, debit: 898.96, cash: 150.00},
  {date: "09/24", circulating: 9550.59, debit: 348.86, cash: 50.00},
  {date: "10/24", circulating: 9108.60, debit: 0.00, cash: 120.00},
  {date: "11/24", circulating: 14036.17, debit: 72.00, cash: 100.00},
  {date: "12/24", circulating: 17461.24, debit: 584.50, cash: 100.00},
  {date: "01/25", circulating: 17002.83, debit: 1178.80, cash: 100.00},
  {date: "02/25", circulating: 13502.83, debit: 2178.80, cash: 50.00},
  {date: "03/25", circulating: 13390.83, debit: 866.20, cash: 50.00}
];

// Menghitung 'total', 'percent', 'pnl'
capitalData.forEach((item, index) => {
  // Menghitung 'total' sebagai penjumlahan dari 'circulating', 'debit', dan 'cash'
  item.total = item.circulating + item.debit + item.cash;

  // Menghitung persentase masing-masing kategori
  item.circulatingPercent = (item.circulating / item.total) * 100;
  item.debitPercent = (item.debit / item.total) * 100;
  item.cashPercent = (item.cash / item.total) * 100;

  // Menghitung 'pnl' sebagai selisih antara 'total' bulan ini dan bulan sebelumnya
  if (index > 0) {
    item.pnl = item.total - capitalData[index - 1].total;
  } else {
    item.pnl = 0; // PNL pertama tetap 0 karena tidak ada bulan sebelumnya
  }
});

export default capitalData;
