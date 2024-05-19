import React, { useEffect, useState } from 'react';
import './All.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogCards } from '../slice/BlogSlice';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Blog = () => {
  const dispatch = useDispatch();
  const [firstBlog, setFirstBlog] = useState(null);
  const [firstThreeBlogs, setFirstThreeBlogs] = useState([]);

  const BlogCards = useSelector((state) => state.blogcards.items);
  useEffect(() => {
    dispatch(fetchBlogCards());
  }, [dispatch]);

  useEffect(() => {
    if (BlogCards && BlogCards.length > 0) {
      setFirstBlog(BlogCards[0]);
      setFirstThreeBlogs(BlogCards.slice(0, 3));
    }
  }, [BlogCards]);

  return (
    <div>
      <div className='cr3'>
        <div className='part1'>
          {firstBlog && (
            <Link>
              <div>
                <img className='bigpic' src={firstBlog.image} alt="" />
              </div>
              <div className='part1text'>
                <div className='text11'>{firstBlog.title}</div>
                <div>Daha çox <FaArrowRightLong /></div>
              </div>
            </Link>
          )}
        </div>
        <div className='part2'>
          {firstThreeBlogs.map((item, index) => (
            <Link key={index}>
              <div className='part2box'>
                <img className='blogpic' src={item.image} alt="" />
                <div className='part2text'>
                  <div className='text1'>{item.title}</div>
                  <div>Daha çox <FaArrowRightLong /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='baslig123'>
        <div className='blogy'>🚀 Bloq yazıları</div>
        <div className='ist'>İstənilən mövzuda yazıçıların hekayələrini, düşüncələrini və təcrübələrini kəşf edin.</div>
      </div>
      <div className='cards'>
        {BlogCards && BlogCards.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <div className='card'>
              <div><img className='cardsimg' src={item.image} alt="" /></div>
              <div className='cardtexts'>
                <div className='guzgu'>{item.title}</div>
                <div className='baslig'>{item.info}</div>
                <div className='yol'>{item.owner}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
