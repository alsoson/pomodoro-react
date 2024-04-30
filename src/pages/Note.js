import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { TrashIcon, PencilIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'

const Time = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dialogNote, setDialogNote] = useState('')
  const [dialogMark, setDialogMark] = useState('')

  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [mark, setRmark] = useState("");
  function markChange(e) {
    setRmark(e.target.value);
  }

  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    setTodoData(getLocalStorage("todo"));
  }, []);

  function saveLocalStorage(newData) {
    localStorage.setItem("todo", JSON.stringify(newData));
  }

  const getLocalStorage = (key) => {
    const todoData = localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):""
    return localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):""
  }
  function addItem(){
    if (todoData.length < 10) {
      const newData = [...todoData, { id: v4(), note, mark }];
      console.log(newData)
      saveLocalStorage(newData);
      setTodoData(newData);
      setNote("");
      setRmark("");
    } else {
      alert('超過10項囉!')
    }
  }
  function deleteItem(id){
    const arr= todoData.filter((item) => item.id !== id)
    console.log(arr)
    saveLocalStorage(arr)
    setTodoData(arr);
  } 
  function editItem(id,item){
    setIsOpen(true)
    // setDialogNote(item.note)
    // setDialogMark(item.mark)
  }

  

  return (
    <div >
      <div className="flex justify-center w-screen">
        <div>
          
            <h1 className="pt-5">待辦事項</h1>
          
          <div className="w-screen pt-4 flex flex-wrap">
            <div className="flex-none w-1/2 max-md:w-full ">
              <label htmlFor="text" className="block text-sm font-semibold leading-6 text-gray-900 ">
                名稱
              </label>
              <div className="flex justify-center mx-5">
                <input
                  value={note}
                  onChange={noteChange}
                  type="text"
                  name="text"
                  id="text"
                  autoComplete="nickname"
                  className="text-center block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-12"
                />
              </div>
            </div>
            <div className="flex-none w-1/2 max-md:w-full ">
              <label htmlFor="text" className="block text-sm font-semibold leading-6 text-gray-900 ">
                備註
              </label>
              <div className="flex justify-center mx-5">
                <input
                  onChange={markChange}
                  value={mark}                
                  type="text"
                  name="text"
                  id="text"
                  autoComplete="nickname"
                  className="text-center block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-12"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <button  onClick={addItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              新增事項
            </button>
          </div>
          <div className=" mt-5 hidden lg:flex md:flex flex justify-center" >
            <table className="">
              
              <tbody>
              {todoData?todoData.map((item)=>{

                return <tr key={item.id} className="my-5">
                  <td>{item.note}{item.mark?'('+item.mark+')':''}</td>
                  <td>
                    <div>
                      <button onClick={() => deleteItem(item.id)} className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 font-bold rounded">
                        <TrashIcon className="h-7 w-7 rounded" />
                      </button>
                      <button onClick={() => editItem(item.id,item)} className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 font-bold rounded mx-1">
                        <PencilIcon className="h-7 w-7 rounded" />
                      </button>
                    </div>
                  </td>
                </tr>
              }):null}
              </tbody>
            </table>
          </div>
          <div className=" mt-5 lg:hidden md:hidden  w-full grid grid-cols-12" >
            
            {todoData?todoData.map((item)=>{
              return (<div className="card flex justify-between mx-3 my-2 py-1 bg-gray-400 rounded-md max-sm:col-span-12 max-md:col-span-6 max-lg:col-span-4" key={item.id}>
                <div className="flex pl-5">
                  <h1 className="py-2">{item.note}</h1>
                  <h2 className="py-2">{item.mark?'('+item.mark+')':''}</h2>
                </div>
                <div>
                  <button onClick={() => deleteItem(item.id)} className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 font-bold rounded">
                    <TrashIcon className="h-7 w-7 rounded" />
                  </button>
                  <button onClick={() => editItem(item.id)} className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-2 font-bold rounded mx-1">
                    <PencilIcon className="h-7 w-7 rounded" />
                  </button>
                </div>
              </div>)
              }):null}
            
          </div>
          


        </div>
      </div>

      {/* headlessui */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="bg-gray-400 z-50 fixed top-0 left-0 w-full h-full">
      <Dialog.Panel>
          <div className="text-right">
            {/* <button onClick={() => setIsOpen(false)}>Deactivate</button> */}
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon className="w-10 h-10"/>
            </button>
          </div>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

      </Dialog.Panel>
    </Dialog>
    </div>
  );
}

export default Time