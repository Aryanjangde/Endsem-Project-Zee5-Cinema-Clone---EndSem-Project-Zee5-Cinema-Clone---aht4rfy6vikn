import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CardDashboard({ _id, thumbnail, keywords }) {
    const [isHovered, setIsHovered] = useState(false);
    const [video, setVideo] = useState(null);
    const nav = useNavigate();
  
    useEffect(() => {
      if (video) {
        nav(`/${encodeURIComponent(video)}`);
      }
    }, [video, nav]);
  
    function handleVideo() {
      if (localStorage.getItem("user")) {
        fetch(`https://academics.newtonschool.co/api/v1/ottx/show/${_id}`, {
          method: "GET",
          headers: {
            "accept": "application/json",
            "projectID": "treoo5dhf86s",
            "Authorization": `Bearer ${localStorage.getItem("user")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.data.video_url);
            setVideo(data.data.video_url);
          });
      } else {
        alert("Please log in first");
        nav("/login");
      }
    }
  
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative rounded-xl flex-col justify-center items-center transition-all duration-300 ease-in-out p-4 shadow-lg transform ${
          isHovered ? "bg-violet-400 text-black scale-105 z-50 rounded-full flex items-center justify-center" : "bg-black text-white scale-100"
        }`}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div className="self-center rounded-xl overflow-hidden">
          <img src={thumbnail} className="rounded-xl w-full h-auto" />
        </div>
        
        {isHovered && (
          <>
            <div className="flex gap-2 p-4 flex-wrap justify-center">
              {keywords.map((item, index) => (
                <span
                  key={index}
                  className={`${
                    isHovered ? "bg-white text-black" : "bg-gray-700 text-white"
                  } rounded-full px-3 py-1 text-sm transition-all duration-300 ease-in-out`}
                >
                  {item}
                </span>
              ))}
            </div>
            <button
              className="bg-white text-black rounded-2xl px-5 py-3 mt-2 mb-2 border-2 border-blue-700 transition-colors duration-200 hover:bg-red-50"
              onClick={handleVideo}
            >
              Watch
            </button>
          </>
        )}
      </div>
    );
  }
  