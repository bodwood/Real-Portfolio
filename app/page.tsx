import {aboutMeData} from './data/data'
import Image from 'next/image'

const AboutMePage = () => {
  return (
    <main className='flex flex-col items-center mb-32'>
      <section className='flex flex-row w10/12 mt-10 mb-6 items-center'>
        <div className='w-1/3'>
          <Image width={640} height={960} aria-label={'Image of Bodie Wood'} src={'/images/animegan_toon_portfolio-pic.jpeg'} priority={false} className='profileImage'/>
          </div>
        <div className='ml-20 w-2/3'>
          <h2>{aboutMeData.title}</h2>
          <p className='text-base'>{aboutMeData.body}</p>
          </div>
      </section>
      <section className='w-full my-8 bg-blue-light p-10 h-full'>
        <p>{aboutMeData.highlightedBody}</p>
      </section>
      <section className='flex flex-row w-10/12 mt-10 items-center'>
        <div className='flex flex-col w-7/12'>
          <p>{aboutMeData.body2}</p>
          </div>
        <div className='w-5/12 ml-10'>
             <Image  width={500} height={250} aria-label={'Image of Bodie Wood'} src={'/images/animegan_toon_portfolio-pic.jpeg'} priority={false} className='h-250 object-cover w-500'/>
        </div>
      </section>
    </main>
  )
}
export default AboutMePage