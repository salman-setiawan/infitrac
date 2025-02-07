const capitalData = [
    {
      id: 1,
      date: "apr24",
      circulating: {
        num: 6122.35,
        percent: 89.9
      },
      debit: {
        num: 136.36,
        percent: 2.0
      },
      cash: {
        num: 550.00,
        percent: 8.1
      },
    },
    {
      id: 2,
      date: "may24",
      circulating: {
        num: 6834.21,
        percent: 92.2
      },
      debit: {
        num: 177.86,
        percent: 2.4
      },
      cash: {
        num: 400.00,
        percent: 5.4
      },
    },
    {
      id: 3,
      date: "jun24",
      circulating: {
        num: 5877.32,
        percent: 88.9
      },
      debit: {
        num: 84.86,
        percent: 1.3
      },
      cash: {
        num: 650.00,
        percent: 9.8
      },
    },
    {
      id: 4,
      date: "jul24",
      circulating: {
        num: 5857.00,
        percent: 82.1
      },
      debit: {
        num: 575.00,
        percent: 8.1
      },
      cash: {
        num: 700.00,
        percent: 9.8
      },
    },
    {
      id: 5,
      date: "aug24",
      circulating: {
        num: 5503.49,
        percent: 84.0
      },
      debit: {
        num: 898.96,
        percent: 13.7
      },
      cash: {
        num: 150.00,
        percent: 2.3
      },
    },
    {
      id: 6,
      date: "sep24",
      circulating: {
        num: 9550.59,
        percent: 96.0
      },
      debit: {
        num: 348.86,
        percent: 3.5
      },
      cash: {
        num: 50.00,
        percent: 0.5
      },
    },
    {
      id: 7,
      date: "oct24",
      circulating: {
        num: 9108.60,
        percent: 98.7
      },
      debit: {
        num: 0.00,
        percent: 0.0
      },
      cash: {
        num: 120.00,
        percent: 1.3
      },
    },
    {
      id: 8,
      date: "nov24",
      circulating: {
        num: 14036.17,
        percent: 98.8
      },
      debit: {
        num: 72.00,
        percent: 0.5
      },
      cash: {
        num: 100.00,
        percent: 0.7
      },
    },
    {
      id: 9,
      date: "dec24",
      circulating: {
        num: 17461.24,
        percent: 96.2
      },
      debit: {
        num: 584.50,
        percent: 3.2
      },
      cash: {
        num: 100.00,
        percent: 0.6
      },
    },
    {
      id: 10,
      date: "jan25",
      circulating: {
        num: 17002.83,
        percent: 93.0
      },
      debit: {
        num: 1178.80,
        percent: 6.4
      },
      cash: {
        num: 100.00,
        percent: 0.5
      },
    }
  ];
  
  // Menghitung 'total' dan 'pnl' secara otomatis
  capitalData.forEach((item, index) => {
    // Menghitung 'total' sebagai penjumlahan dari 'circulating.num', 'debit.num', dan 'cash.num'
    item.total = item.circulating.num + item.debit.num + item.cash.num;
  
    // Menghitung 'pnl' sebagai selisih antara 'total' bulan ini dan bulan sebelumnya
    if (index > 0) {
      item.pnl = item.total - capitalData[index - 1].total;
    } else {
      item.pnl = 0; // PNL pertama tetap 0 karena tidak ada bulan sebelumnya
    }
  });
  
  export default capitalData;
  