import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  ArrowUpRight,
  Code,
  GitCommitHorizontal,
  Laptop,
  Linkedin,
  LinkedinIcon,
  Twitter,
} from 'lucide-react';
import MaxWidthWrapper from './ui/max-width-wrapper';
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';
import MyDevopsProjects from './NotionDoc';

const ShowcaseProjects = () => {
  const router = useRouter();
  return (
    <div className='bg-gray-200'>
      {/* <MaxWidthWrapper className='py-12 '>
        <div className='mb-6 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='text-3xl order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold md:text-5xl lg:text-6xl text-gray-900'>
              Deployed versions of projects are also{' '}
              <span className='relative px-2 bg-blue-600 text-white'>
                available
              </span>{' '}
              with sourceCode.
            </h2>
            <div className='mt-12 flex justify-center'>
              <Button
                className='rounded-full'
                onClick={() => router.push('https://github.com/JaguarsCodehub')}
              >
                <ArrowUpRight className='mr-2 h-4 w-4 text-white' />
                All my projects
              </Button>
              <Button
                className='rounded-full ml-6 bg-blue-600'
                onClick={() =>
                  router.push(
                    'https://www.linkedin.com/in/jyotindra-tavanoji-41909317a/'
                  )
                }
              >
                <Linkedin className='mr-2 h-4 w-4 text-white' />
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper> */}

      <div>
        <MyDevopsProjects />
      </div>

      <div>
        <section className='px-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col w-full pt-24 pr-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Chess Multiplayer Game with websockets{' '}
                  <Badge className='bg-lime-500 font-light text-black'>
                    sockets
                  </Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Enhancing the use of websockets for peer to peer game
                  connectivity
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Seamless Chess UI with valid moves
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  User Interface powered by Core React and best practices
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Type Safe Socket Server with Node js and Typescript{' '}
                  <Badge className='bg-blue-500'>typescript</Badge>
                </h3>
              </div>
              <Button
                onClick={() =>
                  router.push('https://github.com/JaguarsCodehub/chess')
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-lime-500'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-blue-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins text-white bg-black bg-editor-800 w-28 rounded-t-md'>
                      Chess
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image
                    src={require('../assets/images/chess.png')}
                    alt='Netflix'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='px-6 py-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-black'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins bg-blue-500 text-white bg-editor-800 w-28 rounded-t-md'>
                      Chatting
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image src={require('../assets/images/1.png')} alt='Devops' />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Scalable Chat Application with High Level System Design{' '}
                  <Badge className='bg-yellow-500 text-black'>
                    System Design
                  </Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  High Level Scaling Design with Redis
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Pub - Sub Architecture with Redis Insight{' '}
                  <Badge className='bg-red-500 text-white font-normal'>
                    Redis
                  </Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Using Redis as a Key Storage to store messages as values for
                  faster caching
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Kafka Streaming and Consumer
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Kafka used for consuming our messages so that our DB does not
                  gets blocked in the case of a lot of messages
                </p>
              </div>

              <Button
                onClick={() =>
                  router.push(
                    'https://github.com/JaguarsCodehub/scalable-chat-redis-socket-node'
                  )
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
          </div>
        </section>

        <section className='px-6 py-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-red-500'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins bg-black text-white bg-editor-800 w-28 rounded-t-md'>
                      Vercel
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image
                    src={require('../assets/images/vercel-deploy.png')}
                    alt='Netflix'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Vercel like Code Deploy Service{' '}
                  <Badge className='bg-slate-400 text-black'>Vercel</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Implemented a Node Js Server to handle the submission of
                  projects to AWS ECS
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Docker + AWS ECS{' '}
                  <Badge className='bg-blue-400 text-black'>Docker</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  A Docker Container on AWS ECS to build the projects and
                  compile it into an html file that gets stored in S3
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Reverse Proxy Server{' '}
                  <Badge className='bg-yellow-400 text-black'>Proxy</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  A Proxy Server to listen to events and generate a URL to host
                  the deployed code from s3
                </p>
              </div>
              <Button
                onClick={() =>
                  router.push(
                    'https://github.com/JaguarsCodehub/vercel-infrastructure'
                  )
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
          </div>
        </section>

        <section className='px-6 py-32 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col w-full pt-24 pr-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Socket 3d Multiplayer Role Game{' '}
                  <Badge className='bg-cyan-400 text-black'>Coming soon</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  A React Game built with react-three-fiber for rendering the
                  assets and characters
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  A Node Js Socket server{' '}
                  <Badge className='bg-green-500'>Server</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  handles the character events and their movements and also
                  synchronizes it with other peers
                </p>
              </div>

              <Button
                onClick={() =>
                  router.push(
                    'https://github.com/JaguarsCodehub/socket-3d-game'
                  )
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-blue-400'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins bg-black text-white bg-editor-800 w-28 rounded-t-md'>
                      SocketGame
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image
                    src={require('../assets/images/socket-3d-game.png')}
                    alt='Netflix'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='px-6 py-32 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col w-full pt-24 pr-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Note Taking application like Notion
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  A Editor just like Notion powered by React and Convex
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Real time changes with Convex functions{' '}
                  <Badge className='bg-green-500'>Real Time</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  You can edit your pages in real time, thanks to Convex
                  functions and Fast and Secure Database
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Auth + Responsive + Secure and Scalable Architecture{' '}
                  <Badge className='bg-purple-400'>Clerk Auth</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Auth powered by Clerk, File Storage powered by Uploadthing and
                  Database powered by Convex
                </p>
              </div>
              <Button
                onClick={() =>
                  router.push('https://github.com/JaguarsCodehub/note-taking')
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-slate-400'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins bg-black text-white bg-editor-800 w-28 rounded-t-md'>
                      NoteTaking
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image
                    src={require('../assets/images/note-taking.png')}
                    alt='Netflix'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='px-6 py-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-purple-500'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins bg-black text-white bg-editor-800 w-28 rounded-t-md'>
                      TeamChat
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image
                    src={require('../assets/images/discord.png')}
                    alt='Netflix'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Community Platform{' '}
                  <Badge className='bg-purple-500 text-white'>TeamChat</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Integrated all the main features of chat application like
                  chatting, sending attachments etc
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Seamless Modern Chat UI with responsiveness
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Auth powered by Tailwind Css with ShadcnUI
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Text, Audio and Video channels just like Discord{' '}
                  <Badge>Discord</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Used emoji package to integrate the usage of emoticons in
                  message
                </p>
              </div>
              <Button
                onClick={() =>
                  router.push(
                    'https://github.com/JaguarsCodehub/team-chat-platform'
                  )
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
          </div>
        </section>

        <section className='px-6 py-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-green-500'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins bg-black text-white bg-editor-800 w-28 rounded-t-md'>
                      BadWords
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image
                    src={require('../assets/images/profane-detection.png')}
                    alt='Netflix'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Profane Detection API <Badge>API</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Detection of cuse words and giving a profane score
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Hono Js + Cloudfare + Typescript{' '}
                  <Badge className='bg-red-500 text-black'>Techstack</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  A custom built api from scratch using modern API Techstack
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Profane Score to validate how profane a sentence is.{' '}
                  <Badge className='bg-green-500 text-black'>Upstash</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Vector Database powered by Upstash
                </p>
              </div>
              <Button
                onClick={() =>
                  router.push(
                    'https://github.com/JaguarsCodehub/api-profane-production'
                  )
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
          </div>
        </section>

        <section className='px-6 py-32 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col w-full pt-24 pr-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Advanced backend Food API <Badge>MVC</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Food API built with express and typescript with mvc folder
                  structure
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  MongoDB + Express backend
                </h3>
              </div>
              <Button
                onClick={() =>
                  router.push(
                    'https://github.com/JaguarsCodehub/backend-food-advanced-api'
                  )
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-cyan-600'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins bg-black text-white bg-editor-800 w-28 rounded-t-md'>
                      Backend
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image
                    src={require('../assets/images/backend-food-api.png')}
                    alt='Netflix'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='px-6 py-32 sm:px-14 lg:px-24 xl:px-54 bg-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col w-full pt-24 pr-12 space-y-4 md:pr-16 md:w-1/3'>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Video Calling Websocket application{' '}
                  <Badge className='bg-green-500'>socket</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Built using websocket servers in the backend and listening to
                  events.
                </p>
              </div>
              <div className='pt-4 border-b border-gray-900 pb-7'>
                <h3 className='text-xl font-medium text-black font-Poppins'>
                  Frontend powered by WebRTC API{' '}
                  <Badge className='bg-red-500 text-black'>Interesting</Badge>
                </h3>
                <p className='pt-4 text-sm leading-relaxed text-gray-700'>
                  Using STUN Server Logic and ICE Candidates to actually stream
                  the video and audio stream
                </p>
              </div>
              <Button
                onClick={() =>
                  router.push('https://github.com/JaguarsCodehub/omegle-ws')
                }
              >
                <Code className='mr-2 h-4 w-4 text-white' /> Codebase
              </Button>
            </div>
            <div className='flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 '>
              <div className='flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out'>
                <div className='flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-yellow-400'>
                  <div className='flex items-center space-x-1.5 h-full pl-4'>
                    <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                    <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                    <button className='w-2 h-2 rounded-full bg-green-400'></button>
                  </div>
                  <div className='pl-6'>
                    <div className='h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins bg-black text-white bg-editor-800 w-28 rounded-t-md'>
                      VideoChat
                    </div>
                  </div>
                </div>
                <div className='relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400'>
                  <Image
                    src={require('../assets/images/omegle-2.png')}
                    alt='Netflix'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <MaxWidthWrapper className='py-12 '>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto sm:text-center'>
              <h2 className='text-3xl order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold md:text-5xl lg:text-6xl text-gray-900'>
                Not getting enough of me yet ? Dive into my{' '}
                <span className='relative text-gray-400'>github</span> profile
                right now, or lets chat on{' '}
                <span className='relative text-blue-400'>twitter</span> about
                your new product.
              </h2>
              <div className='mt-12 flex justify-center'>
                <Button
                  className='rounded-full text-lg bg-gray-400'
                  onClick={() =>
                    router.push('https://github.com/JaguarsCodehub/')
                  }
                >
                  <GitCommitHorizontal className='mr-2 h-4 w-4 text-white' />
                  Github Profile
                </Button>
                <Button
                  className='rounded-full ml-6 bg-blue-400 text-lg'
                  onClick={() => router.push('https://x.com/jyotindrakt')}
                >
                  <Twitter className='mr-2 h-4 w-4' />
                  Letʻs Connect
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default ShowcaseProjects;
