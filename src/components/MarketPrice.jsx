import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const MarketPrice = ({ coinId }) => {
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      console.log('Fetching data for coinId:', coinId); // Cek coinId yang dipakai

      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`
        );

        console.log('API Response:', response.data); // Cek response API

        if (response.data && response.data[0]) {
          // Ambil data harga, gambar, dan perubahan harga dalam 24 jam
          setCoinData({
            usd: response.data[0].current_price,
            image: response.data[0].image, // Menambahkan gambar ke dalam data state
            priceChange24h: response.data[0].price_change_percentage_24h, // Menambahkan perubahan harga 24 jam
            priceChangeValue24h: response.data[0].price_change_24h, // Menambahkan nilai perubahan harga 24 jam
          });
          setError(null); // Reset error jika data berhasil diambil
        } else {
          setError('Data tidak ditemukan.');
          setCoinData(null);
        }
      } catch (error) {
        console.log('Error fetching data:', error); // Log error jika permintaan gagal
        setError('Error fetching data. Please try again later.');
        setCoinData(null);
      }
    };

    fetchCoinData();

    const interval = setInterval(() => {
      fetchCoinData();
    }, 60000);

    return () => clearInterval(interval);
  }, [coinId]);

  return (
    <div>
      {error ? (
        <div style={{ color: 'red' }}>
          <p className="text-[10px]">{error}</p>
        </div>
      ) : coinData ? (
        <div className="flex items-start">
          {/* Menampilkan gambar koin */}
          {coinData.image && (
            <img
              src={coinData.image}
              alt={`${coinId} icon`}
              width={18} // Ukuran gambar bisa disesuaikan
              height={18}
              className="mr-3 mt-1"
            />
          )}
          <div>
            <h1 className="text-[10px] text-neutral-500">{coinId.toUpperCase()}</h1>
            <p className="text-[10px]">Price: {coinData.usd}</p>
            {/* Menampilkan perubahan harga 24 jam dengan harga baru dan persentase */}
            <p
              className={`text-[10px] ${coinData.priceChange24h < 0 ? 'text-red-300' : 'text-green-300'}`}
            >
              {coinData.priceChangeValue24h.toFixed(2)} ({coinData.priceChange24h.toFixed(2)}%)
            </p>
          </div>
        </div>
      ) : (
        <p className="text-[10px]">Loading...</p>
      )}
    </div>
  );
};

MarketPrice.propTypes = {
  coinId: PropTypes.string.isRequired,
};

export default MarketPrice;
