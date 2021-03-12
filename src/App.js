import "./App.css";


function App() {
  return (
    <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
    <img className='h-44 mb-6' src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' alt="tailwindcsslooogoooo"/>
    <div>
      <h1 className='text-2xl md:text-4xl font-light my-10'>React TailwindCSS Starter</h1>
      <div className='flex mx-auto items-center justify-center'>
      <img src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' className='h-10' alt='tailll'/>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' className='h-12' alt='tailll'/>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Equal_symbol.svg/1200px-Equal_symbol.svg.png' className='h-12' alt='tailll'/>
      <img src='https://cdn.iconscout.com/icon/free/png-256/cool-1642627-1393712.png' className='h-12' alt='tailll'/>
      </div>
      <div className='flex mx-auto items-center justify-center my-10'>
        <a className='p-3 px-9 mr-3 bg-gradient-to-r from-blue-500 to-green-400   text-white rounded-md shadow-md' target='_blank' rel='noreferrer' href='https://github.com/CsAlkemy/react-tailwind-starter' >Download</a>
        <a className='p-3 px-5 ml-3 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-md shadow-md' target='_blank' rel='noreferrer' href='https://github.com/CsAlkemy/react-tailwind-starter'> Buy me coffee</a>
      </div>
    </div>
    </div>
   
  );
}

export default App;
