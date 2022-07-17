import React from 'react';
import VideoCard from './VideoCard';
import './VideosSection.css';
import {auth , provider} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";


function VideosSection() {
  const [user] = useAuthState(auth);

  return (
    <div className="videosSection">
      {user?(<h2>Recommended Videos</h2>): null}
      <div className="videosSection__videos">
        <VideoCard 
        image="https://i.ytimg.com/vi/icmoQQCPZl8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeRKnaJPGsHosw0ASTUGtB1yChhA"
        title="Sudhir Chaudhary Shows sfrrev fvfre rfref rfefrfv ferf ef jhad jaddw ioadw hadw iohdwa iouwdh"
        channel="Aaj Tak"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLQRJiELJWT983TxaxQ8nKgVGP4jgWTvqTaOUFekrB0=s68-c-k-c0x00ffffff-no-rj"
        views="10000"
        timestamp="10 hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/uhvcU9knX9c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHrMv1PGNUPDSlrZPafb1047vZNg"
        title="Road Closed Due to Heavy Rain"
        channel="Mumbiker Nikhil"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLRJmaAPQABLn0Bts8QX0uFVMWx4V4fUP-9ki768QQ=s68-c-k-c0x00ffffff-no-rj"
        views="235k"
        timestamp="8hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/TNUx5oe-YF4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGgM3q0Jbj6-AjGPrH_RxonomTwQ"
        title="Isro Mission of 10000 Crore Rs."
        channel="SciMyth"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSgfIDirZkwZENMXNDkGpWuglsHi1OmBeKQxdzk3A=s68-c-k-c0x00ffffff-no-rj"
        views="47k"
        timestamp="1 month ago"
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/icmoQQCPZl8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeRKnaJPGsHosw0ASTUGtB1yChhA"
        title="Sudhir Chaudhary Shows sfrrev fvfre rfref rfefrfv ferf ef jhad jaddw ioadw hadw iohdwa iouwdh"
        channel="Aaj Tak"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLQRJiELJWT983TxaxQ8nKgVGP4jgWTvqTaOUFekrB0=s68-c-k-c0x00ffffff-no-rj"
        views="10000"
        timestamp="10 hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/uhvcU9knX9c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHrMv1PGNUPDSlrZPafb1047vZNg"
        title="Road Closed Due to Heavy Rain"
        channel="Mumbiker Nikhil"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLRJmaAPQABLn0Bts8QX0uFVMWx4V4fUP-9ki768QQ=s68-c-k-c0x00ffffff-no-rj"
        views="235k"
        timestamp="8hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/TNUx5oe-YF4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGgM3q0Jbj6-AjGPrH_RxonomTwQ"
        title="Isro Mission of 10000 Crore Rs."
        channel="SciMyth"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSgfIDirZkwZENMXNDkGpWuglsHi1OmBeKQxdzk3A=s68-c-k-c0x00ffffff-no-rj"
        views="47k"
        timestamp="1 month ago"
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/icmoQQCPZl8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeRKnaJPGsHosw0ASTUGtB1yChhA"
        title="Sudhir Chaudhary Shows sfrrev fvfre rfref rfefrfv ferf ef jhad jaddw ioadw hadw iohdwa iouwdh"
        channel="Aaj Tak"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLQRJiELJWT983TxaxQ8nKgVGP4jgWTvqTaOUFekrB0=s68-c-k-c0x00ffffff-no-rj"
        views="10000"
        timestamp="10 hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/uhvcU9knX9c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHrMv1PGNUPDSlrZPafb1047vZNg"
        title="Road Closed Due to Heavy Rain"
        channel="Mumbiker Nikhil"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLRJmaAPQABLn0Bts8QX0uFVMWx4V4fUP-9ki768QQ=s68-c-k-c0x00ffffff-no-rj"
        views="235k"
        timestamp="8hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/TNUx5oe-YF4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGgM3q0Jbj6-AjGPrH_RxonomTwQ"
        title="Isro Mission of 10000 Crore Rs."
        channel="SciMyth"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSgfIDirZkwZENMXNDkGpWuglsHi1OmBeKQxdzk3A=s68-c-k-c0x00ffffff-no-rj"
        views="47k"
        timestamp="1 month ago"
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/icmoQQCPZl8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeRKnaJPGsHosw0ASTUGtB1yChhA"
        title="Sudhir Chaudhary Shows sfrrev fvfre rfref rfefrfv ferf ef jhad jaddw ioadw hadw iohdwa iouwdh"
        channel="Aaj Tak"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLQRJiELJWT983TxaxQ8nKgVGP4jgWTvqTaOUFekrB0=s68-c-k-c0x00ffffff-no-rj"
        views="10000"
        timestamp="10 hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/uhvcU9knX9c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHrMv1PGNUPDSlrZPafb1047vZNg"
        title="Road Closed Due to Heavy Rain"
        channel="Mumbiker Nikhil"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLRJmaAPQABLn0Bts8QX0uFVMWx4V4fUP-9ki768QQ=s68-c-k-c0x00ffffff-no-rj"
        views="235k"
        timestamp="8hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/TNUx5oe-YF4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGgM3q0Jbj6-AjGPrH_RxonomTwQ"
        title="Isro Mission of 10000 Crore Rs."
        channel="SciMyth"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSgfIDirZkwZENMXNDkGpWuglsHi1OmBeKQxdzk3A=s68-c-k-c0x00ffffff-no-rj"
        views="47k"
        timestamp="1 month ago"
        />
        <VideoCard 
        image="https://i.ytimg.com/vi/icmoQQCPZl8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeRKnaJPGsHosw0ASTUGtB1yChhA"
        title="Sudhir Chaudhary Shows sfrrev fvfre rfref rfefrfv ferf ef jhad jaddw ioadw hadw iohdwa iouwdh"
        channel="Aaj Tak"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLQRJiELJWT983TxaxQ8nKgVGP4jgWTvqTaOUFekrB0=s68-c-k-c0x00ffffff-no-rj"
        views="10000"
        timestamp="10 hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/uhvcU9knX9c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHrMv1PGNUPDSlrZPafb1047vZNg"
        title="Road Closed Due to Heavy Rain"
        channel="Mumbiker Nikhil"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLRJmaAPQABLn0Bts8QX0uFVMWx4V4fUP-9ki768QQ=s68-c-k-c0x00ffffff-no-rj"
        views="235k"
        timestamp="8hours ago"
        />
        <VideoCard
        image="https://i.ytimg.com/vi/TNUx5oe-YF4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGgM3q0Jbj6-AjGPrH_RxonomTwQ"
        title="Isro Mission of 10000 Crore Rs."
        channel="SciMyth"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSgfIDirZkwZENMXNDkGpWuglsHi1OmBeKQxdzk3A=s68-c-k-c0x00ffffff-no-rj"
        views="47k"
        timestamp="1 month ago"
        />
       
      </div>
    </div>
  )
}

export default VideosSection