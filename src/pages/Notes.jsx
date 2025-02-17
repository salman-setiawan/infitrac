import { useParams } from 'react-router-dom';
import NotesData from '../data/notes.js';
import Notfound from './404.jsx';
import Content from '../components/Content.jsx';

const Notes = () => {
  const { url } = useParams(); // Ambil parameter URL dari route
  const selectedNotes = NotesData.find((note) => note.url === url); // Temukan data berdasarkan url

  if (!selectedNotes) {
    return <Notfound />;
  }

  const {
    title,
    content1, content2, content3, content4, content5, content6, content7
  } = selectedNotes;

  const contentArray = [
    content1, content2, content3, content4, content5, content6, content7
  ];

  return (
    <div>
      <div className="flex place-content-center py-8 px-4 md:px-8 md:max-h-screen">
        <div className="flex flex-col gap-y-2 w-full md:w-[720px]">
          <div className="text-[16px] font-semibold text-blue-200"> {title} </div>
          {contentArray.map((content, index) => 
            content && content.data && content.data.length > 0 ? (
              <div key={index} className="pb-2">
                <Content data={content.data} />
              </div>
            ) : null
          )}
          <span className="text-[#111111]">text</span>
        </div>
      </div>
    </div>
  );
};

export default Notes;
