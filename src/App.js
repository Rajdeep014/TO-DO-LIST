import React, { useState } from 'react'


const App = () => {
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")
    const [maintask, setmaintask] = useState([])


    const submithandler=(e)=>{
         e.preventDefault()
         setmaintask([...maintask,{Title,Desc}])
         setTitle("")
         setDesc("")
    }
    const DeleteHandler=(t)=>{
        let copytask= [...maintask]
        copytask.splice(t,1)
        setmaintask(copytask)



    }

   let renderTask= <h2 className='text-center text-2xl'> No Task Available</h2>
{
    if (maintask.length>0) {

        renderTask= maintask.map((i,t)=>{
            return (
                <li key={t} className='flex items-center justify-between mb-8'>
            <div className='flex items-center justify-between w-2/3'
           >
                <h5 className='text-2xl font-semibold ml-10'>{i.Title}</h5>
                <h5 className='text-2xl font-semibold ml-10'>{i.Desc}</h5>
                <button className='bg-red-500 hover:bg-red-700 text-4xl rounded font-bold px-4 py-3 m-5' onClick={()=>{
                    DeleteHandler(t)
                }}>Delete</button>
                
              
            </div>
            </li>
            )
    
    
        })
        
    }


    
   }

  return (
    <>
   <h1 className=' h-40 text-8xl text-white font-bold text-center bg-black' > TO DO LIST</h1>
   <div className='text-center'>
   <form onSubmit={submithandler}>

 
    <input   className='text-2xl border-zinc-900 border-2 m-8 px-4 py-2 '  type='text' placeholder='Enter Title' value={Title} onChange={(e)=>{
        setTitle(e.target.value)
    }}  />
    <input className='text-2xl border-zinc-900 border-2 m-8 px-4 py-2' type='text' placeholder=' Enter Description' value={Desc} onChange={(e)=>{
       setDesc(e.target.value)
    }} />
    <button className='bg-sky-500 hover:bg-sky-700 text-4xl rounded font-bold px-4 py-3 m-5' >Save</button>
   </form>
   </div>
   <hr/>
   <div>
    {renderTask}

   </div>
    
    </>
  )
}

export default App