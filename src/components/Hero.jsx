import {logo} from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10  pt-3'>
        <img src={logo} alt="sumz" className="w-28 object-contain" />
        <button type='button' onClick={()=> window.open('https://github.com/pratyusssh')} className='black_btn'>
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'> Read fast and in a concise way by using Sumz to summarize the text written in a website.</h2>
    </header>
  )
}

export default Hero
