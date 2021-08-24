import React from 'react';
import { galleryIcon, hamburger, keysIcon, musicIcon, playIcon } from '../../assets/images';
import { SearchBox } from '../../components';
import Tabs from '../../components/tabs/tabs';

const LocalStorage = () => {

    const data = [
        {
            title: 'Franky Wah - Aftertime',
            stat: 'mp3 · 9.2 mb',
            icon: musicIcon
        },
        {
            title: "Annie's new car",
            stat: 'jpg · 4.8 mb',
            icon: galleryIcon
        },
        {
            title: 'Top secret archive',
            stat: 'zip · 3.7 gb',
            icon: keysIcon
        },
        {
            title: 'On the top of the world',
            stat: 'doc · 2.3 mb',
            icon: playIcon
        }
    ]

    return(
        <div className="local">   
             <div className="local-wave">
                <svg viewBox="0 0 450 300" preserveAspectRatio="xMinYMin meet">
                <path
                    d="M0, 100 C150, 150 550,
                        0 500, 200 L600, 00 L0, 0 Z"
                    style={{ stroke: "none", fill: "rgb(232, 239, 255)" }}
                ></path>
                </svg>
            </div>
            <div className="local-container">
                <div className="local_header">
                    Local Storage
                </div>
                <br/>
                <SearchBox />
                <div className="local_menus">
                   <div className="tiles">
                        <img src={playIcon} />
                        <p>Video</p>
                   </div>
                   <div className="tiles">
                        <img src={galleryIcon} />
                        <p>Image</p>
                   </div>
                   <div className="tiles">
                        <img src={musicIcon} />
                        <p>Music</p>
                   </div>
                   <div className="tiles">
                        <img src={keysIcon} />
                        <p>Archive</p>
                   </div>
                </div>
                <div className="local_list">
                   {data.map((ele) =>  <div className="local_list_container">
                        <div className="local_list_content">
                            <div className="local_list_icon">
                                <img src={ele.icon} alt='music' />
                            </div>
                            <div className="local_list_title">
                                {ele.title} <br/>
                                <span>{ele.stat}</span>
                            </div>
                        </div>
                        <div className="local_hamburger">
                            <img src={hamburger} />
                        </div>
                    </div>)}
                </div>
            </div>
            <Tabs />
        </div>
    )
}

export default LocalStorage;