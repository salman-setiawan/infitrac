import PropTypes from 'prop-types';

const Content = ({ data }) => {
  const isValidImage = (url) => {
    return url && /\.(jpg|jpeg|png|webp)$/i.test(url);
  };

  const hasValidImage = data && isValidImage(data.img);

  return (
    <div>
      {hasValidImage ? (
        <div className='py-2'>
          <img className="w-full text-[10px]" src={data.img} alt={data.desc ? data.desc : 'image'} />
          <p className="w-full text-center pt-1.5 text-[10px] text-gray-500">{data.desc ? data.desc : ''}</p>
        </div>
      ) : (
        <div className="leading-relaxed text-justify">
          {data.title && <div className="font-semibold text-[14px] pb-1"> {data.title} </div>}
          {data.text && <div className="text-[12px] text-gray-300"> {data.text} </div>}
        </div>
      )}
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    desc: PropTypes.object, 
    title: PropTypes.object, 
    text: PropTypes.object, 
  }),
};

Content.defaultProps = {
  data: {
    img: null,
    desc: null,
    title: null,
    text: null,
  },
};

export default Content;
