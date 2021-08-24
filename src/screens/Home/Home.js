import React, { useState } from "react";
import { hamburger, upIcon } from "../../assets/images";
import { SearchBox } from "../../components";
import Tabs from "../../components/tabs/tabs";

const Home = () => {

  const [activeTab, setActiveTab] = useState(0);

  const card_data = [
    {
      first: {
        title: 'The next big thing',
        stats: '12 f · 2.1 gb'
      },
      second:  {
        title: 'Top Secret',
        stats: '7 f · 523 mb'
      }
    },
    {
      first: {
        title: 'Freebie project',
        stats: '3 f · 192 mb'
      },
      second: {
        title: 'London Meetup',
        stats: '453 f · 1.7 gb'
      }
    }
  ]

  return (
    <div className="home">
      <div className="wave">
        <svg viewBox="0 0 450 300" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0, 100 C150, 150 550,
                0 500, 200 L600, 00 L0, 0 Z"
            style={{ stroke: "none", fill: "rgb(137, 170, 250)" }}
          ></path>
        </svg>
      </div>
      <div className="home_header">
        <h1>Hello Jessie,</h1>
        <h6>at the moment you have</h6>
        <div className="home-stats">
          <h4>32,5 GB <span>of 100 GB free</span></h4>
          <img src={upIcon} />
        </div>
        <div className="progress-bar">
            <span></span>
        </div>
      </div>
      <div className="home_body">
        <div className="home_search">
          <SearchBox />
        </div>
        <div className="tabs">
            <h5 className={activeTab === 0 && 'active'} onClick={()=>setActiveTab(0)}>Files</h5>
            <h5 className={activeTab === 1 && 'active'} onClick={()=>setActiveTab(1)}>Folders</h5>
        </div>
        <div>
         {card_data.map((_ele) => <div className="row">
            <div className="col">
              <div className="content">
                <p className="title">{_ele.first?.title}</p>
                <p className="stat">{_ele.first?.stats}</p>
              </div>
              <div className="tab">
                <img src={hamburger} alt='hamburger' />
              </div>
            </div>
            <div className="col">
              <div className="content">
                <p className="title">{_ele.second?.title}</p>
                <p className="stat">{_ele.second?.stats}</p>
              </div>
              <div className="tab">
                <img src={hamburger} alt='hamburger' />
              </div>
            </div>
          </div>)}
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Home;
