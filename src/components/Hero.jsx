import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-4'>
            <img src={logo} alt='speedread_logo' className='w-40 object-contain'></img>
            <button type='button' onClick={()=>{window.open("https://github.com/abhiram-edupuganti/speedread.git")}} className='black_btn'>GitHub</button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles Through <br/>
            <span className='orange_gradient'>Open AI</span>   
        </h1>
        <h2 className='desc'>Smart Summaries: AI-Powered Simplification for Easy Reading!</h2>
    </header>
  )
}

export default Hero