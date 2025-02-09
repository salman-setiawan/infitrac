import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';
import capitalData from '../data/capital.js';

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const LineChart = () => {
  // Menyiapkan data untuk chart
  const data = {
    labels: capitalData.map(item => item.date), // Label sumbu X berdasarkan bulan
    datasets: [
      { 
        data: capitalData.map(item => item.total), // Data pada sumbu Y
        borderColor: '#8EC5FF', // Warna garis
        backgroundColor: '#8EC5FF', // Warna garis
        tension: 0, // Kelengkungan garis
      },
    ],
  };

  // Menyiapkan options untuk chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        min: -5000,
        max: 25000,
        ticks: {
          stepSize: 5000,
          font: {
            size: 9,
            family: 'Space Mono',
          },
        },
      },
      x: {
        offset: true,
        ticks: {
          padding: 4,
          font: {
            size: 9,
            family: 'Space Mono',
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function() {
            return ''; // Menghilangkan judul tooltip yang biasanya berisi informasi sumbu x
          },
        },
        // Menonaktifkan border, background dan warna kotak pada tooltip
        backgroundColor: '#111111', // Transparan (tanpa latar belakang)
        displayColors: false, // Menghilangkan warna titik di tooltip
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '180px' }}> 
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
