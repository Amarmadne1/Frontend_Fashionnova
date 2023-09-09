import { useLocation } from "react-router-dom";

export default function AccessDenied() {
  const location = useLocation();
  
  // Only show Navigation component when not on the NotFound page
  // const showNavigation = location.pathname !== "*";

  console.log("not found ---- path",location.pathname)

    return (
      <>
        
     
          <div className="text-center">

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Access Denied</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">You are not Admin</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
           
              <a href="/" className="text-sm font-semibold text-gray-900">
                Go back to Home <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
       
      </>
    )
  }
  