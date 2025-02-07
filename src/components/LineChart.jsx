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
        label: 'Total', // Nama dataset
        data: capitalData.map(item => item.total), // Data pada sumbu Y
        fill: false, // Tidak ada area di bawah garis
        borderColor: '#8EC5FF', // Warna garis
        tension: 0.3, // Kelengkungan garis
      },
    ],
  };

  // Menyiapkan options untuk chart
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ini memastikan chart menyesuaikan dengan ukuran kontainer
    scales: {
      y: {
        beginAtZero: true, // Mulai dari angka 0
        min: 0, // Set minimum value
        max: 30000, // Set maximum value
        ticks: {
          stepSize: 6000, // Tentukan interval tick
          font: {
            size: 9, // Ukuran font untuk sumbu X
            family: 'Space Mono', // Jenis font untuk sumbu X
          },
        },
      },
      x: {
        offset: true, // Memberikan jarak antara sumbu X dan Y
        ticks: {
          padding: 4,
          font: {
            size: 9, // Ukuran font untuk sumbu X
            family: 'Space Mono', // Jenis font untuk sumbu X
          },
        },
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
