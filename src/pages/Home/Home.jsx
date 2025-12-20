import React, { useEffect, useState, useMemo } from 'react';
import './home.css';
import Container from '../../components/Container/Container';
import axios from 'axios';
import Post from '../../components/Post/Post';
import Popup from '../../components/Popup/Popup';
import { IoClose } from 'react-icons/io5';

const Home = ({ searchInput }) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://cloud.codesupply.co/endpoint/react/data.json');
      setData(response.data);
      localStorage.setItem('fetchedData', JSON.stringify(response.data));
      console.log('Data saved to localStorage');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    if (!searchInput) return data;
    return data.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.text.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.tags.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [data, searchInput]);

  return (
    <Container>
      <div className="post">
        {filteredData && (
          <div className="post__container">
            {filteredData.map((item, index) => (
              <Post key={index} item={item} index={index} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedPost={setSelectedPost} />
            ))}
          </div>
        )}
      </div>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} selectedPost={selectedPost} setSelectedPost={setSelectedPost}>
       {selectedPost && (
        <div className='popup-post' onClick={(e) => e.stopPropagation()}>
          <IoClose size={30} onClick={() => setIsOpen(false)} className="popup-close" />
            <img src={selectedPost.img} srcSet={selectedPost.img_2x} alt={selectedPost.title} className='popup-post__img' />
            <div className='popup-post__info'>
                <h4 className='popup-post__tags'>{selectedPost.tags}</h4>
                <h2 className='popup-post__title'>{selectedPost.title}</h2>
                <div className='popup-post__autor-date'>        
                    <span className='popup-post__autor'>{selectedPost.autor}</span>
                    <span className='popup-post__date-views'>{selectedPost.date}</span>
                    <span className='popup-post__date-views'>{selectedPost.views}  Views</span>
                </div>
                <p className='popup-post__text'>{selectedPost.text}</p>
            </div>
        </div>
       )}
      </Popup>
    </Container>
  );
};

export default Home;