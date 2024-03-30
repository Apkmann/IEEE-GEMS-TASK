import React, { useEffect, useState } from 'react';
import "./videos.css";
import Categories from './categories';

export default function Videos({searchQuery}) {
    const [jdata, setJData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setcategory] = useState("All");
    const cate = (val)=>{
        setcategory(val);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/public/videos", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setJData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className='loading'><div className='spinner'></div></div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
       <>
       <Categories cate={cate} />
        <div className='videos'>
            {jdata.filter((video) => 
            (category === "All" || video.category === category) &&
            (video.title.toLowerCase().includes(searchQuery.toLowerCase()) || video.channelName.toLowerCase().includes(searchQuery.toLowerCase())))
              .map((video, ind) => (
                <div key={ind} className="container">
                    <p className='duration'>{video.duration}</p>
                  <img className="thumbnail" src={video.thumbnail} alt={video.title} />
                  <h4>{video.title}</h4>
                  <footer>
                    <img className="channelpic" src={video.channelPicture} alt={video.channelName}/>
                    <div className="details">
                        <p className='channelname'>{video.channelName}</p>
                        <div className='container2'>
                            <p>{video.views+" "+"Views"}</p>
                            <p>{video.uploadedDateTime.slice(0,10)}</p>
                        </div>
                    </div>
                  </footer>
                </div>
              ))}
        </div> 
        </>
      );
}
