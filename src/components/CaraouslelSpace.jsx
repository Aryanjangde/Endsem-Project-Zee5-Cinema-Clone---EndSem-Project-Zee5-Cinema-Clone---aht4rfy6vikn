import { useContext, useEffect, useState } from "react";
import { ApiContext } from "./contextFolder/Context";
import { Carousel } from "primereact/carousel";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./VideoModal";
import CardDashboard from "./CardDashboard";


export default function CarouselSpace() {
  const [categoryList, setCategoryList] = useState([]);
  const [curr, setCurr] = useState("movie");
  const value = useContext(ApiContext);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    async function fetchCategoryList() {
      let res = await fetch(
        "https://academics.newtonschool.co/api/v1/ottx/categories",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            projectID: "treoo5dhf86s",
          },
        }
      );
      let data = await res.json();
      if (data.message === "success") {
        setCategoryList(data.data);
      } else {
        navigate("/error");
      }
    }
    fetchCategoryList();
  }, []);

  const CategoryWise = {};
  if (categoryList.length !== 0) {
    categoryList.forEach((item) => {
      const List = value.data.filter((itm) => itm.type === item);
      CategoryWise[item] = List;
    });
  }
  console.log(value.data);

  
  const options = [
    "movie",
    "tv show",
    "web series",
    "documentary",
    "short film",
    "video song",
    "trailer",
  ];

  return (
    <div className="flex-col text-white mt-16 p-14 space-y-10">
      <div className="text-5xl font-bold">Trending Movies</div>
      <div>
        <Carousel
          value={value.data}
          numVisible={5}
          numScroll={2}
          className="custom-carousel"
          circular
          itemTemplate={CardDashboard}
        />
      </div>

      <div className="flex justify-between">
      <div className="text-5xl font-bold capitalize p-5">{curr}</div>
        <select
          onChange={(e) => {
            setCurr(e.target.value);
          }}
          className="bg-gray-700 text-white pl-3 pr-3 rounded-xl"
        >
          {options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Carousel
          value={CategoryWise[curr] || []}
          numVisible={5}
          numScroll={2}
          className="custom-carousel"
          circular
          itemTemplate={CardDashboard}
        />
      </div>
    </div>
  );
}
