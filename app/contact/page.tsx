'use client';
import Navbar from '../components/navbar';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/skills.css';

const Contact = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const isScreenHeightSmall = useMediaQuery({ query: '(max-width: 768px)' });
  const [email, setEmail] = useState('bodiewould@gmail.com');
  const [message, setMessage] = useState('message');
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const calculateContainerHeight = () => {
      const screenHeight = window.innerHeight;
      const newContainerHeight = isScreenHeightSmall ? screenHeight : (7 / 8) * screenHeight;
      setContainerHeight(newContainerHeight);
    };

    calculateContainerHeight();

    const handleResize = () => {
      calculateContainerHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isScreenHeightSmall]);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    //Form
    let timeout: NodeJS.Timeout;
    if (isMessageSent && formRef) {
      formRef.current?.reset();
      setTimeout(() => {
        setIsMessageSent(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isMessageSent]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;

    const floating_first_name = target.elements.namedItem('floating_first_name') as HTMLInputElement;
    const floating_last_name = target.elements.namedItem('floating_last_name') as HTMLInputElement;
    const floating_email = target.elements.namedItem('floating_email') as HTMLInputElement;
    const message = target.elements.namedItem('message') as HTMLInputElement;

    const data = {
      first_name: floating_first_name.value,
      last_name: floating_last_name.value,
      email: floating_email.value,
      message: message.value,
    };

    //MongoDB
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.statusText);
      }
      setIsMessageSent(true);
      const responseData = await response.json();
      console.log(responseData);
    } catch (error: any) {
      console.error('There was an error: ' + error);
    }
    console.log(data);
  }

  return (
    <div className={`flex items-center justify-center h-screen ${fadeIn ? 'fade-in' : ''}`}>
      <div
        className='container mx-auto px-10 py-5 rounded-3xl shadow shadow-white h-full bg-white overflow-auto md:overflow-hidden'
        style={{ height: `${containerHeight}px` }}
      >
        <>
          <Navbar />
          {/* add drawer from flowbite https://flowbite.com/docs/components/drawer/#contact-form */}
        </>
        <div className='flex flex-col w-full items-center pb-5'>
          <h1 className='text-3xl text-bold'>Contact</h1>
          <p className='text-xl'>Let's connect!</p>
        </div>
        <div
          className='w-full h-1/9 flex flex-row grid-row-5 gap-4 md:gap-2 justify-center'
          style={{ color: 'grey-500' }}
        >
          <div>
            <FontAwesomeIcon icon={faInstagram} className='h-10 w-10' />
          </div>
          <div>
            <FontAwesomeIcon icon={faYoutube} className='h-10 w-10' />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} className='h-10 w-10' />
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} className='h-10 w-10' />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} className='h-10 w-10' />
          </div>
        </div>
        <div className='w-full text-center pt-5'>
          <h1>Send me a message</h1>
        </div>
        <div className='w-full h-1/3 py-5'>
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='email'
                name='floating_email'
                id='floating_email'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_email'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Email address
              </label>
            </div>

            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  name='floating_first_name'
                  id='floating_first_name'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_first_name'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  First name
                </label>
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  name='floating_last_name'
                  id='floating_last_name'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_last_name'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Last name
                </label>
              </div>
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Your message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Hi Bodie...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Submit
            </button>
          </form>
          {isMessageSent && <p> Message has been Sent</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
