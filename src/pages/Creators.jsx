import React, { useEffect } from 'react';
import './All.css'
import Top from '../components/Top/Top';
import tiktok from '../images/tiktok.webp';
import { Link } from 'react-router-dom';
import { fetchCreator } from '../slice/CreatorSlice';
import { useDispatch, useSelector } from 'react-redux';

const Creators = () => {
  const dispatch = useDispatch();
  const Creator = useSelector((state) => state.creators.items);
  const isLoading = useSelector((state) => state.creators.isLoading); // Redux'tan yüklenme durumunu al

  useEffect(() => {
    dispatch(fetchCreator());
  }, [dispatch]);

  return (
    <div className='cr2'>
      <div className='top-sec'>
        <div className='top-texts'>
          <div className='uzv'>Üzvlərimiz</div>
          <div className='top'>Top bəxşiş toplayanlar</div>
          <div className='siz'>Siz də öz yaradıcılıq
            fəaliyyətinizdən qazanan
            şəxslərdən olun.</div>
        </div>
        <div className='user'>
          {isLoading ? (
            <div>Loading...</div> 
          ) : (
            Creator.map((item, id) => (
              <Link key={id}>
                <div className='users'>
                  <div><img className='sabir' src={item.image} alt="" /></div>
                  <div className='sm'>{item.title}</div>
                  <div className='yay'>{item.info}</div>
                  <div className='destek'>{item.destekci}</div>
                  <div><img src={tiktok} alt="" /></div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Creators;
