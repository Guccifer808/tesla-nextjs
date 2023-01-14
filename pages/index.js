import Header from 'components/Header';
import Section from 'components/Section';
import { sectionImages } from 'constants/images';

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Header />
      {/* FIX OVERFLOW  */}
      <div className='snap-y snap-mandatory overflow-y-scroll w-full h-full'>
        {sectionImages.map((section) => (
          <Section key={sectionImages.header} {...section} />
        ))}
      </div>
    </div>
  );
}
