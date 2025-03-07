import {useUser} from '@clerk/clerk-react'
import "react-quill-new/dist/quill.snow.css"
import ReactQuill from 'react-quill-new';

const Write = () => {
  const {isLoaded, isSignedIn} = useUser();
  if(!isLoaded){
    return <div className=''>Loading...</div>
  }
  if(isLoaded && !isSignedIn){
    return <div className=''>You should login!</div>
  }

  return (
  <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-8'> 
<h1 className='text-cl font-light'>Create a New Post</h1>
<form className='flex flex-col gap-6 flex-1 mb-6'>
  <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-100 bg-black'>Add a cover image</button>
  <input className='text-4xl font-semibold bg-transparent outline-none' type='text' placeholder='My Awesome Story'/>
<div className='flex items-center gap-4'>
  <label htmlFor='' className='p-2 rounded-xl bg-teal-200 shadow-md'>Choose a category:</label>
  <select name='car' id='' className='p-2 rounded-xl bg-white shadow-md'>
    <option value='general'>General</option>
    <option value='web-design'>Web Design</option>
    <option value='development'>Development</option>
    <option value='databases'>Databases</option>
    <option value='seo'>Engines</option>
    <option value='marketing'>Marketing</option>
  </select>
</div>
<textarea className='p-2 rounded-xl bg-white shadow-md'name='desc' placeholder='A Short Description'/>
<ReactQuill theme='snow' className='flex-1 rounded-xl bg-white shadow-md'/>
<button>Send</button>
</form>
  </div>
  )
}

export default Write
