import { menuSidebarAtom } from 'atoms/menuSidebarAtom';
import Header from 'components/Header';
import Section from 'components/Section';
import { sectionImages } from 'constants/images';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [showSidebar, setShowSidebar] = useRecoilState(menuSidebarAtom);
  return (
    <div className='w-full h-full'>
      <Header />
      {/* FIX OVERFLOW  */}
      <div
        className={`${
          showSidebar && 'blur-sm opacity-80'
        } snap-y snap-mandatory overflow-y-scroll overflow-x-hidden w-screen h-screen`}
      >
        {sectionImages.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  );
}
