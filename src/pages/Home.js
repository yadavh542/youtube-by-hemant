import React from 'react';
import '../App.css';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import VideosSection from '../components/VideosSection'

function Home() {
  return (
    <div>
        <div className="home__page">
          <Sidebar/>
          <VideosSection/>
        </div>
    </div>
  )
}

export default Home