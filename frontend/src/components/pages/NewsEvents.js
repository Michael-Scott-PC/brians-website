import React, { useEffect } from 'react';
import axiosSecondServer from '../../api/axiosSecondServer';

const NewsEvents = () => {
    // const getCurrentNews = async () => {
    //     try {
    //       const res = await axiosSecondServer.get('/api/news/')
    //       console.log(res);
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     getCurrentNews();
    // });

    return (
        <div className='container-fluid'>
           <a className="twitter-timeline" data-width="400" data-height="800" data-theme="light" href="https://twitter.com/BrianVRealtor?ref_src=twsrc%5Etfw">Tweets by BrianVRealtor</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    )
}

export default NewsEvents;
