import React, { useState } from 'react'
import ToastContext from './ToastService'

//accepts our App as children and wrap it with a contextProvider
function ToastProvider({children}) {
    const [toasts, setToasts] = useState([])
    
    //toast helper functions
    // const open = (component, timeout = 5000,) => {
    //     //ask for id or generate your own
    //     const id = Date.now()
    //     setToasts(toasts => [...toasts, {id, component}])
    //     //close after timeout
    //     setTimeout(() => close(id), timeout)
    //     //return the toast id(if you wanted to close the toast programatically)
    //     return id
    // }

    //toast helper functions
    const open = (message="", timeout = 5000,) => {
        //ask for id or generate your own
        const id = Date.now()
        setToasts(toasts => [...toasts, {id, message}])
        //close after timeout
        setTimeout(() => close(id), timeout)
        //return the toast id(if you wanted to close the toast programatically)
        return id
    }

    //by filtering out the toast with given id
    const close = (id) => setToasts(toasts => toasts.filter(toast =>toast.id !== id))

  return (
    // pass the helper functions to the provider
    <ToastContext.Provider value={{open, close }}>
        {children}
        {/* to show up at the bottom right corner */}
        <div className='space-y-2 absolute top-16 right-4'>
            {toasts.map(({id, message, type="info"}) => 
            (
                
                // because we need the close button on top right corner
                <div key={id} className="">

                    <div id="toast-success" class="flex items-center w-full p-4 mb-4 text-gray-500 bg-[#E9EBF4] border-2 border-blue-900 rounded-lg shadow-sm" role="alert">
                        <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-900 bg-green-100 rounded-lg">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="sr-only">Check icon</span>
                        </div>
                        <div class="ms-3 text-sm font-normal mr-8">{message}</div>
                        <button type="button" onClick={() => close(id)} class="ms-auto -mx-1.5 -my-1.5 bg-transparent text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
                            <span class="sr-only">Close</span>
                            <svg class="w-3 h-3 text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>


                </div>
            ) )}
        </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider


// // because we need the close button on top right corner
//                 <div key={id} className="bg-blue-400">
//                     {/* <button onClick={() => close(id)} className='absolute top-2 right-2 p-1 rounded-lg bg-gray-200/20 text-gray800/60'>
//                         X
//                     </button> */}
//                     {component}
//                     <button onClick={() => close(id)} type="button" className="absolute top-4 right-4 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" aria-label="Close">
//                         <span class="sr-only">Close</span>
//                         <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                         </svg>
//                     </button>
//                 </div>