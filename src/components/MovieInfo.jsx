import { useParams } from "react-router-dom/dist"
import './MovieInfo.css'




const MovieInfo = () => {
    const movieId = useParams()
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


const filteredObject = movie.filter((item) => item.id == movieId.movieId )

console.log(filteredObject);
  return (
    <div className="info-wrapper">
      {
        filteredObject.map((movie, index) =>(
          <div key={index}>
            <img src={movie.img} alt="img" />
            <h2>
            {movie.title}
            </h2>
            <p>{movie.desc}</p>
          </div>
        ))
      }
    </div>
  )
}

export default MovieInfo
