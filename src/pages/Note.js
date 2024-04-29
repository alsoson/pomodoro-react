import { useState,useEffect } from "react";
import { v4 } from "uuid";
import { TrashIcon } from '@heroicons/react/24/outline'

const Time = () => {
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
          <div className=" mt-5 hidden lg:flex flex justify-center" >
            <table className="">
              
              <tbody>
              {todoData?todoData.map((item)=>{

                return <tr key={item.id}>
                  <td>{item.note}{item.mark?'('+item.mark+')':''}</td>
                  <td>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-3">
                        <TrashIcon className="h-7 w-7" />
                    </button>
                  </td>
                </tr>
              }):null}
              </tbody>
            </table>
          </div>
          


        </div>
      </div>
    </div>
  );
}

export default Time