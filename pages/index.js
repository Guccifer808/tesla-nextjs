import Header from 'components/Header';
import Section from 'components/Section';

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Header />
      {/* FIX OVERFLOW  */}
      <div className='snap-y snap-mandatory overflow-y-scroll w-full h-full'>
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
    </div>
  );
}
