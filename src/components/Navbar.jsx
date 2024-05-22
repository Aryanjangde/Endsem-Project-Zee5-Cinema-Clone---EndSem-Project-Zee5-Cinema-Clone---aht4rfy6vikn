import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { useContext } from "react";
import { ApiContext } from "./contextFolder/Context";



export default function Navbar() {
    const isUser = useContext(ApiContext);
    const nav = useNavigate();
  return (
    <div>
      <nav >
        
        <div className="flex bg-black justify-between items-center  border-neutral-600 shadow-white rounded-sm">
        <div className="ml-1">
        <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 96 96"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="M0 .561h47.823v95.012H0z" />
            <path
              fill="#22BBBE"
              d="M47.823 3.717V.561C21.411.56 0 21.83 0 48.067c0 26.237 21.411 47.506 47.823 47.506v-3.156c-17.146-.015-33.49-9.9-40.839-26.492-9.927-22.414.315-48.58 22.879-58.442a44.734 44.734 0 0 1 17.96-3.766"
            />
            <path
              fill="#7DAD41"
              d="M31.132 10.386L29.85 7.489C7.285 17.351-2.957 43.516 6.971 65.93c9.928 22.414 36.268 32.59 58.832 22.727l-1.284-2.896c-11.668 5.088-25.534 4.783-37.416-2.032C7.279 72.36.487 47.18 11.933 27.487a41.166 41.166 0 0 1 19.2-17.101"
            />
            <path
              fill="#F4B719"
              d="M66.962 15.139l1.585-2.728C48.723 1.041 23.375 7.79 11.929 27.481.484 47.173 7.277 72.354 27.1 83.723l1.59-2.735a38.21 38.21 0 0 1-8.602-6.76c-14.545-15.225-13.91-39.28 1.416-53.729C34.088 8.636 52.665 6.94 66.962 15.14"
            />
            <path
              fill="#E55824"
              d="M23.68 22.794l-2.185-2.287C6.168 34.956 5.527 59.003 20.072 74.228c14.545 15.226 38.76 15.855 54.086 1.407l-2.192-2.295c-8.172 7.69-19.917 11.342-31.733 8.739-18.91-4.164-30.84-22.768-26.648-41.552A34.622 34.622 0 0 1 23.68 22.794"
            />
            <path
              fill="#B52C80"
              d="M54.724 17.149l.69-3.094c-18.91-4.164-37.637 7.687-41.83 26.472-4.192 18.784 7.74 37.388 26.649 41.552l.69-3.09-.005-.001C23.725 75.2 12.879 58.288 16.69 41.212c3.811-17.076 20.837-27.85 38.027-24.065l.007.002"
            />
            <path
              fill="#FEFEFE"
              d="M71.242 52.89h8.073c.172-1.117.284-2.253.336-3.405l-8.41.041v3.364zM71.242 43.142v3.25l8.394-.042a31.7 31.7 0 0 0-.337-3.208h-8.057z"
            />
            <path
              fill="#FEFEFE"
              d="M67.718 56.024V40.008H78.64C75.05 26.42 62.605 16.397 47.8 16.397c-17.608 0-31.883 14.18-31.883 31.67 0 17.491 14.275 31.671 31.882 31.671 14.842 0 27.314-10.074 30.867-23.714h-10.95zM83.807 53.835l1.745-2.03c1.285 1.185 2.64 1.915 4.131 1.915 1.928 0 3.19-1.094 3.19-2.759v-.045c0-1.619-1.377-2.645-3.328-2.645-1.148 0-2.134.32-2.96.707l-1.7-1.118.46-7.82h9.594v2.485h-7.161l-.253 3.74c.758-.274 1.47-.457 2.548-.457 3.121 0 5.577 1.642 5.577 5.016v.046c0 3.26-2.387 5.404-5.944 5.404-2.456 0-4.384-.98-5.9-2.44"
            />
            <path
              fill="#020303"
              d="M63.448 43.142h-8.753v3.25h8.753v3.134h-8.753v3.364h8.753v3.134H51.17V40.008h12.277zM47.463 42.685l-8.869 10.25h8.869v3.09h-13.43v-2.678l8.868-10.25h-8.59v-3.089h13.152zM79.638 46.35h-.117l-8.28.041v-3.249h8.061a31.279 31.279 0 0 0-.66-3.135H67.719v16.017h10.951c.268-1.025.484-2.07.648-3.134h-8.075v-3.364l8.297-.04.112-.001h.001a31.91 31.91 0 0 0-.014-3.134"
            />
          </g>
        </svg>
        </Link>
        </div>
      
        <div>

        {localStorage.getItem("user") ? (<button className="text-black mr-10 bg-white rounded-xl p-3" onClick={()=>{
          localStorage.removeItem("user");
          nav("/login");
        }}>Sign Out</button>) : (<button className="text-black mr-10 bg-white rounded-xl p-3 pl-8 pr-8" onClick={()=>{
          nav("/login");
        }
        }>Log In</button>)}
        
        
        </div>
        

        
        </div>
      </nav>
      <main >
        <Outlet />
      </main>
    </div>
  );
}
