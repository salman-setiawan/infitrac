import { useState, useEffect } from "react";
import spendingData from '../data/spending.js'; 

// Fungsi untuk menentukan warna teks berdasarkan kategori
const getTextColor = (category) => {
  switch (category) {
    case "investment":
      return "text-blue-400";  // Blue for investment
    case "foods":
      return "text-green-400"; // Green for foods
    case "self reward":
      return "text-yellow-400"; // Yellow for self reward
    case "transport":
      return "text-purple-400"; // Purple for transport
    case "bills":
      return "text-red-400"; // Red for bills
    case "emergency":
      return "text-orange-400"; // Orange for emergency
    default:
      return "text-neutral-500"; // Default color
  }
};

// Fungsi untuk memformat angka menjadi format IDR dengan mengurangi 3 digit terakhir dan menjadikan 2 digit sebagai desimal
const formatNumber = (num) => {
  if (num === null || num === undefined) return '-';

  // Mengurangi 3 digit dan menjadikan 2 digit terakhir sebagai desimal
  let formattedNum = (parseFloat(num) / 1000).toFixed(2); // Membagi dengan 1000 dan memastikan dua digit desimal
  return new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(formattedNum);
};

const SpendingTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const formattedData = spendingData.map(item => ({
      ...item,
      "Spending": formatNumber(item.spend),
    }));
    setData(formattedData);
  }, []);

  // Header otomatis dengan konfigurasi kolom lebih fleksibel
  const headers = [
    { label: "Date", key: "date", width: "w-[80px]", padding: "pr-12", alignment: "text-left" },
    { label: "Subject", key: "subject", width: "w-[200px]", padding: "pr-8", alignment: "text-left" },
    { label: "Category", key: "category", width: "w-[100px]", padding: "pr-8", alignment: "text-left" },
    { label: "Spend", key: "Spending", width: "w-[80px]", padding: "", alignment: "text-right" },
  ];

  // Calculate Total Spend per category
  const categoryTotals = data.reduce((totals, item) => {
    const category = item.category;
    const spend = parseFloat(item.spend) || 0;

    if (totals[category]) {
      totals[category] += spend;
    } else {
      totals[category] = spend;
    }

    return totals;
  }, {});

  // Calculate Total Spending
  const totalSpend = data.reduce((total, item) => {
    return total + (parseFloat(item.spend) || 0);
  }, 0);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="">
      <div className="pb-4">
        <div className="grid grid-cols-2 gap-x-4">
          {Object.keys(categoryTotals).map((category) => (
            <div className="flex justify-between text-[10px]" key={category}>
              <p className="text-neutral-500">{category}</p>
              <p className="text-red-300">{formatNumber(categoryTotals[category])}</p>
            </div>
          ))}
        </div>

        {/* Menampilkan total seluruh spending setelah kategori emergency */}
        <div className="flex justify-between text-[10px] mt-1">
          <p className="text-neutral-500">total spend</p>
          <p className="text-red-300 font-semibold">{formatNumber(totalSpend)}</p>
        </div>
      </div>

      <div className="overflow-x-auto h-[178px] bg-neutral-900 overflow-y-hidden">
        <div className="table w-full min-w-max">
          <div className="table-header-group text-[10px] text-neutral-500 bg-[#111111]">
            <div className="table-row">
              {headers.map((header, index) => (
                <div className={`${header.width} ${header.padding} ${header.alignment} table-cell py-0.5 ${index === 0 ? 'pl-1' : ''} 
                              ${index === headers.length - 1 ? 'pr-1' : ''}`} key={index}>
                  {header.label}
                </div>
              ))}
            </div>
          </div>
          <div className="table-row-group text-[10px]">
            {currentData.map((item, index) => (
              <div className="table-row" key={index}>
                {headers.map((header, idx) => (
                  <div
                    className={`table-cell truncate ${header.width} ${header.padding} ${header.alignment} ${header.key === 'category' ? getTextColor(item[header.key]) : ''} ${idx === 0 ? 'pl-1' : ''} 
                    ${idx === headers.length - 1 ? 'pr-1' : ''}`}
                    key={idx}
                  >
                    {/* Kolom spend yang diformat dengan formatNumber */}
                    {header.key === 'Spending' ? formatNumber(item.spend) : item[header.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigasi Pagination */}
      <div className="flex justify-between pt-4 gap-x-3 items-center">
        {/* Nomor posisi halaman dengan warna putih */}
        <p className="text-[10px] text-neutral-500">
          <span>Page</span> 
          <span className="text-white"> {currentPage} </span>
          <span>of</span> 
          <span className="text-white"> {totalPages}</span>
        </p>

        {/* Tombol pagination */}
        <div className="flex gap-x-3">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-2 py-1 border text-[10px] ${currentPage === 1 ? 'border-neutral-600' : 'border-blue-400'}`}
          >
            Prev
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 border text-[10px] ${currentPage === totalPages ? 'border-neutral-600' : 'border-blue-400'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpendingTable;
