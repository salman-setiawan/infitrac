import PropTypes from 'prop-types';

const Content = ({ data }) => {
  const isValidImage = (url) => {
    return url && /\.(jpg|jpeg|png|webp)$/i.test(url);
  };

  return (
    <div>
      {data.map((item, index) => {
        if (item.img && isValidImage(item.img)) {
          return (
            <div key={index} className="py-2">
              <img className="w-full text-[10px]" src={item.img} alt={item.desc || 'image'} />
              <p className="w-full text-center pt-1.5 text-[10px] text-gray-500">{item.desc || ''}</p>
            </div>
          );
        }
        if (item.text) {
          return (
            <div key={index} className="leading-relaxed text-justify">
              <p className="text-[12px] text-gray-300 my-5">{item.text}</p>
            </div>
          );
        }
        if (item.url && item.alias) {
          return (
            <div key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="font-semibold text-[12px] text-blue-400 py-1">{item.alias}</div>
              </a>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      img: PropTypes.string,
      url: PropTypes.string,
      alias: PropTypes.string,
      desc: PropTypes.string,
    })
  ).isRequired,
};

export default Content;
