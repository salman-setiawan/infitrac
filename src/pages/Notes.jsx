import { useParams } from 'react-router-dom';
import NotesData from '../data/notes.js';
import Notfound from './404.jsx';
import Content from '../components/Content.jsx';

const Notes = () => {
  const { id } = useParams();
  const selectedNotes = NotesData.find(Notes => Notes.id === parseInt(id));

  if (!selectedNotes) {
    return <Notfound />;
  }

  const {
    title,
    content1, content2, content3, content4, content5, content6, content7,
    content8, content9, content10, content11, content12, content13, content14,
    content15, content16,
  } = selectedNotes;

  const contentArray = [
    content1, content2, content3, content4, content5, content6, content7,
    content8, content9, content10, content11, content12, content13, content14,
    content15, content16
  ];

  return (
    <div>
      <div className="flex place-content-center md:py-8 px-4 md:px-8 md:max-h-screen">
        <div className="flex flex-col gap-y-4 w-full md:w-[720px]">
          <div className="text-[16px] font-semibold text-blue-400"> {title} </div>
          {contentArray.map((content, index) => 
            content ? (
              <div key={index} className="py-1">
                <Content data={content} />
              </div>
            ) : null
          )}
          <span className='text-[#111111]'>text</span>
        </div>
      </div>
    </div>
  )
}

export default Notes