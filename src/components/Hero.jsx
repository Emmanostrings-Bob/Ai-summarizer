import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo'
            className='w-28 object-contain'/>

            <button
            type='button' onClick={() => window.open('https://github.com/Emmanostrings-bob')}
            className='black_btn'>
                GitHub
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize article with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAi GPT-4</span>
        </h1>
        <h2 className='desc'>
        Unlock the power of concise summarization with OpenAI's robust summarizer tool, designed to distill lengthy content into easy-to-digest insights.
        </h2>
    </header>
  )
}

export default Hero