import { useState, useEffect } from "react";
import capitalData from '../data/capital.js'; 
import LineChart from "./LineChart.jsx";

// Fungsi untuk menentukan warna teks berdasarkan kolom
const getTextColor = (key, value, pnlValue) => {
  if (key === "Circulating %" || key === "Debit %" || key === "Cash %") {
    return "text-neutral-500"; 
  }
  if (key === "PnL") {
    return pnlValue >= 0 ? "text-green-300" : "text-red-300";
  }
  return "";
};

const CapitalTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const formatNumber = (num) => {
    if (num === null || num === undefined) return '-';
    return new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
  };

  useEffect(() => {
    const formattedData = capitalData.map(item => ({
      ...item,
      "Circulating Num": formatNumber(item.circulating),
      "Circulating %": formatNumber(item.circulatingPercent),
      "Debit Num": formatNumber(item.debit),
      "Debit %": formatNumber(item.debitPercent),
      "Cash Num": formatNumber(item.cash),
      "Cash %": formatNumber(item.cashPercent),
      "Total Num": formatNumber(item.total),
      "PnL": formatNumber(item.pnl)
    }));
    setData(formattedData);
  }, []);

  const headers = [
    { label: "Date", key: "date", width: "w-[100px]", padding: "pr-12", alignment: "text-left" },
    { label: "Assets", key: "Circulating Num", width: "w-[80px]", padding: "pr-2", alignment: "text-right" },
    { label: "%", key: "Circulating %", width: "", padding: "pr-12", alignment: "text-center" },
    { label: "Debit", key: "Debit Num", width: "w-[40px]", padding: "pr-2", alignment: "text-right" },
    { label: "%", key: "Debit %", width: "", padding: "pr-12", alignment: "text-center" },
    { label: "Cash", key: "Cash Num", width: "w-[40px]", padding: "pr-2", alignment: "text-right" },
    { label: "%", key: "Cash %", width: "", padding: "pr-12", alignment: "text-center" },
    { label: "Total", key: "Total Num", width: "w-[80px]", padding: "pr-8", alignment: "text-right" },
    { label: "PnL", key: "PnL", width: "", padding: "pr-0", alignment: "text-right" }
  ];

  // Find the first non-zero total in the data
  let startIndex = 0;
  while (startIndex < data.length && data[startIndex].total === 0) {
    startIndex++;
  }

  // If there is no valid data (all totals are 0), use the first available data point
  const validStart = startIndex < data.length ? data[startIndex] : null;

  // Find the last non-zero total in the data
  let endIndex = data.length - 1;
  while (endIndex >= 0 && data[endIndex].total === 0) {
    endIndex--;
  }

  // If there is no valid data (all totals are 0), use the last available data point
  const validEnd = endIndex >= 0 ? data[endIndex] : null;

  if (!validStart || !validEnd) {
    // Handle the case where there are no valid data points with non-zero totals
    console.error("No valid data available.");
    return null;
  }

  // Generate years starting from 2024
  const startYear = 2024;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const years = Array.from({ length: totalPages }, (_, index) => startYear + index);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Current year corresponding to the current page
  const currentYear = years[currentPage - 1]; 

  return (
    <div>
      <div className="w-full pb-6">
        <LineChart />
      </div>
      <div className="overflow-x-auto h-[210px] overflow-y-hidden">
        <div className="table w-full min-w-max pb-2">
          <div className="table-header-group text-[10px] text-neutral-500">
            <div className="table-row">
              {headers.map((header, index) => (
                <div className={`${header.width} ${header.padding} ${header.alignment} table-cell pb-1`} key={index}>
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
                    className={`table-cell ${header.width} ${header.padding} ${header.alignment} ${getTextColor(header.key, item[header.key], item.pnl)}`}
                    key={idx}
                  >
                    {item[header.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3 flex justify-between text-[10px]">
        <p className="text-neutral-500">Gain/Loss</p>
        <p className="text-green-300">
          {formatNumber(validEnd.total - validStart.total)}
        </p>
      </div>
      <div className="flex justify-between text-[10px]">
        <p className="text-neutral-500">Percentage</p>
        <p className="text-green-300">
          {formatNumber(
            validStart.total > 0
            ? ((validEnd.total - validStart.total) / validStart.total) * 100
            : 0
          )}%
        </p>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between pt-4 gap-x-3 items-center">
        <p className="text-[10px] text-neutral-500">
          <span>Year of</span>
          <span className="text-white"> {currentYear} </span>
        </p>
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

export default CapitalTable;
