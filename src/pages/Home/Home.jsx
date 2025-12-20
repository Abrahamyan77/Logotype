import React, { useEffect, useState, useMemo } from 'react';
import './home.css';
import Container from '../../components/Container/Container';
import axios from 'axios';
import Post from '../../components/Post/Post';

const Home = ({ searchInput }) => {
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
              <Post key={index} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;