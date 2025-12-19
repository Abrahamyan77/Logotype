import React, { useEffect, useState } from 'react';
import './home.css';
import Container from '../../components/Container/Container';
import axios from 'axios';
import Post from '../../components/Post/Post';

const Home = () => {
  const [data, setData] = useState([]);

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

    fetchData();
  }, []);


  return (
    <Container>
      <div className="post">
        {data && (
          <div className="post__container">
            {data.map((item, index) => (
              <Post key={index} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;