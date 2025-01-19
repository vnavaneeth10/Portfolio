import HeroImage from '../assets/main.JPG'
import { TypeAnimation } from 'react-type-animation'
import SocialIcons from './SocialIcons'
import Button from './Button'
const Home = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center min-h-screen px-6'>
      <div className='md:w-1/2 flex justify-center'>
        <img src={HeroImage} alt="Navaneeth V" className='rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300'/>
      </div>

      <div className='md:w-1/2 text-center md:text-left mt-6 md:mt-0'>
       
       <h1 className='text-white text-4xl sm:text-7xl font-bold mb-4'>Hi, It's <span className='text-red-500'>NAVANEETH V</span></h1>
       
       <h3 className='text-white text-2xl sm:text-3xl font-semibold mb-4'>I am a <span className='text-red-500 '>
        
        <TypeAnimation
        sequence={
          [
            "Software Engineer",1000,
            "Frontend Engineer",1000,
            "Business Analyst",1000,
            "Data Analyst",1000,
            "Machine Learning Engineer",1000,
          ]}
          speed={50}
          style={{fontSize: "3rem"}}
          repeat={Infinity}
        />

        </span></h3>

       <p className='text-white text-sm sm:text-lg mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam possimus similique nemo perferendis magni nisi asperiores corrupti quidem distinctio reiciendis, voluptas culpa ipsam? Harum omnis optio, asperiores facilis exercitationem sint!</p>
      
       <SocialIcons/>
       
       <Button text="Hire me" href="#"/>
       
      </div>

    </section>
  )
}

export default Home