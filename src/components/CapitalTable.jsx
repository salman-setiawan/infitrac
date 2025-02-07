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
  const itemsPerPage = 10;

  const formatNumber = (num) => {
    if (num === null || num === undefined) return '-';
    return new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
  };

  useEffect(() => {
    const formattedData = capitalData.map(item => ({
      ...item,
      "Circulating Num": formatNumber(item.circulating.num),
      "Circulating %": formatNumber(item.circulating.percent),
      "Debit Num": formatNumber(item.debit.num),
      "Debit %": formatNumber(item.debit.percent),
      "Cash Num": formatNumber(item.cash.num),
      "Cash %": formatNumber(item.cash.percent),
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

  const gainLoss = data.length > 0 
    ? (capitalData[capitalData.length - 1].total - capitalData[0].total) 
    : 0;

  const percentageGainLoss = data.length > 0 && data[0].total > 0
    ? ((data[data.length - 1].total - data[0].total) / data[data.length - 1].total) * 100
    : 0;

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <div className="w-full pb-6">
        <LineChart />
      </div>
      <div className="overflow-x-auto">
        <div className="table w-full min-w-max pb-2">
          <div className="table-header-group text-[10px] text-neutral-500">
            <div className="table-row">
              {headers.map((header, index) => (
                <div
                  className={`${header.width} ${header.padding} ${header.alignment} table-cell pb-1`}
                  key={index}
                >
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
                    {header.key.includes("%") ? (
                      item[header.key]
                    ) : (
                      item[header.key]
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="pt-3 flex justify-between text-[10px]">
        <p className="text-neutral-500">Gain/Loss</p>
        <p className="text-green-300">{formatNumber(gainLoss)}</p>
      </div>
      <div className="flex justify-between text-[10px]">
        <p className="text-neutral-500">Percentage</p>
        <p className="text-green-300">{formatNumber(percentageGainLoss)}%</p>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between pt-4 gap-x-3 items-center">
        <p className="text-[10px] text-neutral-500">
          <span>Page</span> 
          <span className="text-white"> {currentPage} </span>
          <span>of</span> 
          <span className="text-white"> {totalPages}</span>
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
