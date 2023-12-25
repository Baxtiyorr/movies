import { useEffect } from "react"

import {fetchData} from "./redux/slice/fetchData"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './Movie.css'

const movie = [
  {
  id : 1,
  title: 'object-1',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 2,
  title: 'object-2',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 3,
  title: 'object-3',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 4,
  title: 'object-4',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 5,
  title: 'object-5',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 6,
  title: 'object-6',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 7,
  title: 'object-7',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 8,
  title: 'object-8',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 9,
  title: 'object-9',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 10,
  title: 'object-10',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 11,
  title: 'object-11',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 12,
  title: 'object-12',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 13,
  title: 'object-13',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 14,
  title: 'object-14',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},{
  id : 15,
  title: 'object-15',
  img: 'https://cdn-icons-png.flaticon.com/512/2175/2175188.png',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic! In, fugit voluptates ea culpa unde dolorum quod natus rem cum molestiae alias qui sed voluptate placeat quos at blanditiis.'
},


]

const Movies = () => {



const dispatch = useDispatch();
const mainData = useSelector(state => state.getData);


const {data: movieData, error, loading } = mainData;

console.log(mainData);

useEffect(()=>{
    dispatch(fetchData('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'))
}, [])


if(loading){
    return <div>loading...</div>
}


  return (
    <>
      <div className="movie-wrapper">
        {
          movie.map((movie, index) =>(
            <Link key={index} to={`/movie/${movie.id}`}>
              <div className="movie-card"><img src={movie.img} alt="img"/> 
                <div className="movie-card-content">
                  <h2>{movie.title}</h2>
                  
                  <p>{movie.desc}</p>
                </div>
              </div>
            </Link> 
          ))
        }
      </div>
    </>
  )
}

export default Movies
