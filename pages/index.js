import Head from 'next/head';
import { useState } from 'react';

import heroImage from '../Assets/Images/hero.png';
import compImage1 from '../Assets/Images/comp1.png';
import compImage2 from '../Assets/Images/comp2.png';
import compImage3 from '../Assets/Images/comp3.png';
import compImage4 from '../Assets/Images/comp4.png';
import befenitImage1 from '../Assets/Images/benefit1.png';
import befenitImage2 from '../Assets/Images/benefit2.png';
import befenitImage3 from '../Assets/Images/benefit3.png';
import testemonialImage from '../Assets/Images/testemonial.jpg';

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='bg-dark-bg text-white overflow-x-hidden'>
      <Head>
        <title>Socialism - Boost Your Social Media Influence</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-4/5 mx-auto lg:w-11/12 sm:w-[95%]'>
        <div className='relative'>
          <div className='absolute rounded-full h-[400px] w-[400px]  bg-pink-cr top-[-170px] left-[30%] blur-[150px]'></div>
          <div className='absolute rounded-full h-[500px] w-[500px]  bg-orange-cr bottom-[-90px] right-[-400px] blur-[100px] sm:right-[-280px]'></div>
          {/* Header */}
          <div className='py-9 sm:p-0 sm:py-5 relative z-20'>
            <div className='flex justify-between items-center'>
              <div className='font-semibold text-xl'>Socialism</div>
              <nav
                className={`flex lg:absolute lg:flex-col lg:w-full  lg:bg-bttn-bg lg:left-0 lg:pl-5  z-10 ${
                  openMenu ? 'lg:top-full' : 'lg:top-[-1000%]'
                } transition-all duration-200 ease-in`}
              >
                <li className='mr-10 cursor-pointer font-extralight lg:mr-0 lg:font-medium lg:my-4 lg:text-lg'>
                  Home
                </li>
                <li className='mx-10 cursor-pointer font-extralight lg:mx-0 lg:font-medium lg:my-4 lg:text-lg'>
                  Services
                </li>
                <li className='mx-10 cursor-pointer font-extralight lg:mx-0 lg:font-medium lg:my-4 lg:text-lg'>
                  Blog
                </li>
                <li className='ml-10 cursor-pointer font-extralight lg:ml-0 lg:font-medium lg:my-4 lg:text-lg'>
                  Pricing
                </li>
              </nav>
              <div
                className='hidden lg:flex lg:flex-col lg:justify-between lg:w-5 lg:h-5'
                onClick={() => setOpenMenu(!openMenu)}
              >
                <div
                  className={`w-full h-0.5 bg-white transition-all duration-200 ease-in ${
                    openMenu ? 'rotate-[-45deg] translate-y-[9px]' : ''
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-white transition-all duration-200 ease-in ${
                    openMenu ? 'opacity-0' : ''
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-white transition-all duration-200 ease-in ${
                    openMenu ? 'rotate-45 translate-y-[-9px]' : ''
                  }`}
                ></div>
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className='pt-20 pb-40 sm:pb-20 sm:py-16 relative z-10'>
            <div className='flex justify-between items-center md:flex-col md:items-start'>
              <div className='flex-1'>
                <h1 className='text-6xl font-bold leading-[1.3] tracking-wide sm:text-5xl sm:leading-[1.4]'>
                  Boost Your <br /> Social Media <br /> Influence
                </h1>
                <p className='text-lg-text my-10'>
                  Ut placerat orci nulla pellentesque. Tellus in metus vulputate
                  eu.
                </p>
                <div>
                  <button className='px-10 py-3 rounded-full bg-bttn-bg mr-5 font-semibold'>
                    LET'S START
                  </button>
                  <button className='border border-white px-10 py-3 rounded-full font-semibold sm:my-2'>
                    PRICING
                  </button>
                </div>
              </div>
              <div className='flex-1 flex justify-end md:mt-10'>
                <img className='w-full md:w-4/5' src={heroImage.src} />
              </div>
            </div>
          </div>

          {/*Featuren On*/}
          <div className='relative z-10 mb-40 md:mb-20'>
            <p className='mb-2'>FEATURED ON</p>
            <div className='flex justify-between items-center bg-light-bg px-20 md:px-2'>
              <img
                className='w-[140px] md:w-[90px] sm:w-[70px]'
                src={compImage1.src}
              />
              <img
                className='w-[140px]  md:w-[90px] sm:w-[70px]'
                src={compImage2.src}
              />
              <img
                className='w-[140px] md:w-[90px] sm:w-[70px]'
                src={compImage3.src}
              />
              <img
                className='w-[140px] md:w-[90px] sm:w-[70px]'
                src={compImage4.src}
              />
            </div>
          </div>
        </div>

        {/*Benefit 1*/}
        <div className='mb-52 md:mb-32'>
          <div className='flex justify-between items-start lg:items-center md:flex-col-reverse'>
            <div className='flex-1 flex justify-start md:mt-5'>
              <img className='xs:w-3/5' src={befenitImage1.src} />
            </div>
            <div className='flex-1 pt-10'>
              <p className='text-lg-bl-tx text-sm'>ANALITYCS</p>
              <h1 className='text-5xl font-semibold my-4'>
                Track Your Targeting Group Actionts
              </h1>
              <p className='my-10 text-lg-text'>
                Proin libero nunc consequat interdum varius sit amet. Pharetra
                magna ac placerat.
              </p>
              <button className='px-10 py-3 rounded-full bg-bttn-bg mr-5 font-semibold'>
                VIEW OUR PRICING
              </button>
            </div>
          </div>
        </div>

        {/*Benefit 2*/}
        <div className='mb-52 md:mb-32'>
          <div className='flex justify-between items-start lg:items-center md:flex-col'>
            <div className='flex-1 pt-10'>
              <p className='text-lg-bl-tx text-sm'>GET THAT RATING</p>
              <h1 className='text-5xl font-semibold my-4'>
                Give Your Customers What They Need
              </h1>
              <p className='my-10 text-lg-text'>
                Proin libero nunc consequat interdum varius sit amet. Pharetra
                magna ac placerat.
              </p>
              <button className='px-10 py-3 rounded-full bg-bttn-bg mr-5 font-semibold'>
                VIEW OUR PRICING
              </button>
            </div>
            <div className='flex-1 flex justify-center md:mt-5 xs:justify-start'>
              <img className='xs:w-3/5' src={befenitImage2.src} />
            </div>
          </div>
        </div>

        {/*Benefit 3*/}
        <div className='mb-52 md:mb-32'>
          <div className='flex justify-between items-start lg:items-center md:flex-col-reverse'>
            <div className='flex-1 flex justify-start md:mt-5'>
              <img className='xs:w-3/5' src={befenitImage3.src} />
            </div>
            <div className='flex-1 pt-10'>
              <p className='text-lg-bl-tx text-sm'>SOLVE THE PUZZLE</p>
              <h1 className='text-5xl font-semibold my-4'>
                Get What You Need For The Success
              </h1>
              <p className='my-10 text-lg-text'>
                Proin libero nunc consequat interdum varius sit amet. Pharetra
                magna ac placerat.
              </p>
              <button className='px-10 py-3 rounded-full bg-bttn-bg mr-5 font-semibold'>
                VIEW OUR PRICING
              </button>
            </div>
          </div>
        </div>

        {/* Testemonial */}
        <div className='mb-52 md:mb-32'>
          <div>
            <div className='mb-20 text-center'>
              <p className='text-lg-bl-tx text-sm'>TESTOMONIAL</p>
              <h1 className='text-5xl font-semibold my-4'>
                Read What Others <br /> Have To Say
              </h1>
            </div>
            <div className='flex gap-5 md:flex-col'>
              <div className='relative bg-light-bg rounded-lg flex flex-col justify-center items-center p-3'>
                <div className='translate-y-[-50px] flex flex-col items-center'>
                  <img
                    className='rounded-full w-[100px] h-[90px] contrast-50'
                    src={testemonialImage.src}
                  />
                  <h3 className='font-medium mt-3 text-lg tracking-wide'>
                    Jacks Oliver
                  </h3>
                </div>
                <p className='text-center text-lg-text'>
                  Montes nascetur ridiculus mus mauris vitae ultricies leo. Non
                  sodales neque sodales ut etiam sit amet nisl purus. Viverra
                  aliquet eget sit amet. Egestas dui id ornare arcu odio.
                  Suspendisse interdum consectetur libero id faucibus nisl
                  tincidunt eget nullam.
                </p>
              </div>
              <div className='relative bg-light-bg rounded-lg flex flex-col justify-center items-center p-3 md:my-20'>
                <div className='translate-y-[-50px] flex flex-col items-center'>
                  <img
                    className='rounded-full w-[100px] h-[90px] contrast-50'
                    src={testemonialImage.src}
                  />
                  <h3 className='font-medium mt-3 text-lg tracking-wide'>
                    Jacks Oliver
                  </h3>
                </div>
                <p className='text-center text-lg-text'>
                  Montes nascetur ridiculus mus mauris vitae ultricies leo. Non
                  sodales neque sodales ut etiam sit amet nisl purus. Viverra
                  aliquet eget sit amet. Egestas dui id ornare arcu odio.
                  Suspendisse interdum consectetur libero id faucibus nisl
                  tincidunt eget nullam.
                </p>
              </div>
              <div className='relative bg-light-bg rounded-lg flex flex-col justify-center items-center p-3'>
                <div className='translate-y-[-50px] flex flex-col items-center'>
                  <img
                    className='rounded-full w-[100px] h-[90px] contrast-50'
                    src={testemonialImage.src}
                  />
                  <h3 className='font-medium mt-3 text-lg tracking-wide'>
                    Jacks Oliver
                  </h3>
                </div>
                <p className='text-center text-lg-text'>
                  Montes nascetur ridiculus mus mauris vitae ultricies leo. Non
                  sodales neque sodales ut etiam sit amet nisl purus. Viverra
                  aliquet eget sit amet. Egestas dui id ornare arcu odio.
                  Suspendisse interdum consectetur libero id faucibus nisl
                  tincidunt eget nullam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Are You Ready? */}
        <div className='mb-52 md:mb-32'>
          <div className='bg-gradient-to-r from-light-bg to-lg-bl-tx rounded-xl text-center py-8'>
            <p className='text-black font-semibold'>ARE YOU READY?</p>
            <h1 className='my-14 text-5xl font-bold sm:text-3xl'>
              Be The Part Of The <br /> Next Big Thing
            </h1>
            <button className='px-14 py-3 rounded-full bg-black mr-5 font-semibold'>
              VIEW OUR PRICING
            </button>
          </div>
        </div>

        {/* Footer */}
        <div>
          <div className='flex justify-between items-start py-5 md:flex-col'>
            <div className='font-semibold text-xl '>Socialism</div>
            <div>
              <h4 className='font-semibold text-lg md:mt-10'>Contact</h4>
              <p className='my-5 font-extralight cursor-pointer'>Instagram</p>
              <p className='my-5 font-extralight cursor-pointer'>Linkedin</p>
              <p className='my-5 font-extralight cursor-pointer'>Facebook</p>
              <p className='my-5 font-extralight cursor-pointer'>Email</p>
            </div>
            <div>
              <h4 className='font-semibold text-lg md:mt-10'>Useful Links</h4>
              <p className='my-5 font-extralight cursor-pointer'>Home</p>
              <p className='my-5 font-extralight cursor-pointer'>Services</p>
              <p className='my-5 font-extralight cursor-pointer'>Blog</p>
              <p className='my-5 font-extralight cursor-pointer'>Pricing</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='md:mt-10'>
              <h4 className='font-semibold text-lg mb-5'>Join Our Newletter</h4>
              <div className='bg-light-bg rounded-3xl overflow-hidden h-[45px]'>
                <input
                  className='outline-none bg-transparent pl-2'
                  placeholder='Email Address'
                />
                <button className='px-5 bg-bttn-bg h-full rounded-3xl'>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-light-bg to-lg-bl-tx w-full h-[6px]'></div>
    </div>
  );
};

export default Home;
