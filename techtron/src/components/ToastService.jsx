import React, { createContext, useContext } from 'react'

const ToastContext = createContext()

//create useToast hook (a wrapper using useContext)
export const useToast = () => useContext(ToastContext)
//export the context also
export default ToastContext















// function Service
// () {
//   return (
//     <div>Service
        
//     </div>
//   )
// }

// export default Service
