"use client"

import React from 'react';
import {motion} from 'framer-motion'
import { REFERENCES } from '@/constants';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='max-container padding-container flex-col py-5 sm:py-5 pb-10 md:pb-32 md:pt-20 md:gap-28 lg:by-20 2xl:flex-row' id='references'>
        <div>
          <motion.h1 
          initial={{opacity: 0, translateX: -50}} whileInView={{opacity: 1, translateX: 0}} viewport={{once: true}} transition={{ duration: 1.0, delay:  0.2}}
          className='regular-40 py-5'>Portfolio</motion.h1>
          <motion.p 
          initial={{opacity: 0, translateX: -100}} whileInView={{opacity: 1, translateX: 0}} viewport={{once: true}} transition={{ duration: 1.0, delay:  0.3}}
          className='text-gray-950 pb-5'>I have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success. Also I have some previous projects that worth showing our skills.</motion.p>
          <motion.div
          initial={{opacity: 0, translateX: -150}} whileInView={{opacity: 1, translateX: 0}} viewport={{once: true}} transition={{ duration: 1.0, delay:  0.4}}
          className='hero_rectangle py-5'>Here are some examples of my notable works:</motion.div>
        </div>
        <div className='grid gap-10 lg:grid-cols-2 py-10 md:grid-cols-2 grid-cols-1 place-items-center'>
          {REFERENCES.map((references, i) => (
            <motion.div
            initial={{opacity: 0, translateX: -50}} whileInView={{opacity: 1, translateX: 0}} viewport={{once: true}} transition={{type: "string", duration: 0.54, delay: i * 0.2}}
            >
            <ReferencesCard 
            title={references.title}
            key={references.title}
            link={references.link}
            description={references.description}
            src={references.src}
            project={references.project}
            />
            </motion.div>
          ))}
        </div>
    </section>
  )
}

type ReferencesCard = {
    title: string;
    link: string;
    description: string;
    src: string;
    project: string,
  }
  
  const ReferencesCard = ({title, link, description, src, project}: ReferencesCard) => {
  return (
  
    <div className=" border border-other-gray border-opacity-40 rounded-lg shadow">
      <img className="rounded-t-lg" src={src} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl regular-32 tracking-tight text-gray-950">{title}</h5>
        <div className='flex justify-between flex-start py-5'>
        <div className='hero_rectangle'>{link}</div>
          <a href={link} target='_blank'>
            <Image
              src='export.svg'
              width={40}
              height={20}
              alt='export'
            />
          </a>
        </div>
        <p className="mb-3 font-normal text-gray-400">{description}</p>
        <div className='text-gray-600'>{project}</div>
      </div>
    </div>
  )
  }
  
  export default Hero