import {aboutMeData} from './data/data'
import Image from 'next/image'

const AboutMePage = () => {
  return (
    <main className='flex flex-col items-center sm:mb-32 mb-16'>
      <section className='flex sm:flex-row sm:w-10/12 items-center flex-col w-full'>
        <div className='sm:w-1/3 w-full flex justify-center mt-10'>
          <Image width={640} height={960} aria-label={'Image of Bodie Wood'} src={'/images/animegan_toon_portfolio-pic.jpeg'} priority={false} className='profileImage'/>
          </div>
        <div className='sm:ml-20 sm:mt-0 sm:w-2/3 w-full mt-6 ml-0 p-10'>
          <h2>{aboutMeData.title}</h2>
          <p className='text-base'>{aboutMeData.body}</p>
          </div>
      </section>
      <section className='w-full bg-blue-light p-10 h-full'>
        <p>{aboutMeData.highlightedBody}</p>
      </section>
      <section className='flex sm:flex-row sm:w-10/12 p-10 items-center w-full flex-col'>
        <div className='flex flex-col w-full mb-10 sm:mb-0 sm:w-7/12'>
          <p>{aboutMeData.body2}</p>
          </div>
        <div className='sm:w-5/12 sm:ml-10 w-full ml-0'>
             <Image  width={500} height={250} aria-label={'Image of Bodie Wood'} src={'/images/animegan_toon_portfolio-pic.jpeg'} priority={false} className='h-250 object-cover w-500'/>
        </div>
      </section>
    </main>
  )
}
export default AboutMePage