'use client';

import Image from 'next/image';
import { Tabs } from '../components/ui/tabs';

export function TabsDemo() {
  const tabs = [
    {
      title: 'Chess (scratch)',
      value: 'Chess',
      content: (
        <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
          <Image src={require('../assets/images/chess.png')} alt='Netflix' />
        </div>
      ),
    },
    {
      title: 'Scalable Chat App',
      value: 'Scalable Chat App',
      content: (
        <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
          <Image src={require('../assets/images/1.png')} alt='Netflix' />
        </div>
      ),
    },
    {
      title: 'Deploy repo to cloud (like Vercel)',
      value: 'Deploy repo to cloud',
      content: (
        <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
          <Image
            src={require('../assets/images/vercel-deploy.png')}
            alt='Netflix'
          />
        </div>
      ),
    },
    {
      title: 'Socket 3d Game',
      value: 'Socket 3d Game',
      content: (
        <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
          <Image
            src={require('../assets/images/socket-3d-game.png')}
            alt='Netflix'
          />
        </div>
      ),
    },
    {
      title: 'Community Platform',
      value: 'Community Platform',
      content: (
        <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
          <Image src={require('../assets/images/discord.png')} alt='Netflix' />
        </div>
      ),
    },
  ];

  return (
    <div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full  items-start justify-start'>
      <Tabs tabs={tabs} activeTabClassName='' />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src='/linear.webp'
      alt='dummy image'
      width='1000'
      height='1000'
      className='object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
    />
  );
};
