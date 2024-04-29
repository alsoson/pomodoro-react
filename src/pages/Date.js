function Time() {
  return (
    <div >
      <div className="flex justify-center w-screen">
        <div>
          <h1 className="pt-5">紀錄</h1>
          

          <div className="w-screen pt-4">
            <label htmlFor="text" className="block text-sm font-semibold leading-6 text-gray-900 ">
              First name
            </label>
            <div className="flex justify-center w-screen">
              <input
                type="text"
                name="text"
                id="text"
                autoComplete="nickname"
                className="block w-9/12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-12"
              />
            </div>
          </div>
          <div className="w-screen pt-4">
            <label htmlFor="text" className="block text-sm font-semibold leading-6 text-gray-900 ">
              First name
            </label>
            <div className="flex justify-center w-screen">
              <input
                type="text"
                name="text"
                id="text"
                autoComplete="nickname"
                className="block w-9/12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-12"
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Time