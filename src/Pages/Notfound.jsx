import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  
  // Only show Navigation component when not on the NotFound page
  // const showNavigation = location.pathname !== "*";

  console.log("not found ---- path",location.pathname)

    return (
      <>
        
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 notfoundfooter">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl font-semibold text-indigo-600">Page not found</h1>
            <p className="mt-6 text-base leading-7 font-semibold text-indigo-600 ml-5">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
             
              <a href="/" className="text-base font-semibold text-indigo-600 hover:text-indigo-300">
                Go back to Home <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  