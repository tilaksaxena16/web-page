import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Pagelogo } from './Pagelogo/Pagelogo';
import { Sidebarheading } from './Sidebarheading/Sidebarheading';
import { Sidebaritems } from './Sidebarheading/Sidebaritems/Sidebaritems';
import { Header } from './Header/Header';
import { Nav } from './Nav/Nav';
import { Maincontentheading } from './Maincontent/Maincontentheading';
import { Maincontentcenter } from './Maincontentcenter/Maincontentcenter';
import { Maincontentbottom } from './Maincontentbottom/Maincontentbottom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='page-display'>
      <div className='flex-display'>
        <div className='width20'>
          <Pagelogo></Pagelogo>
        </div>
        <div className='width80 border-style'>
          <Header></Header>
        </div>
      </div>
      <div className='flex-display'>
        <div className='width20'>
          <Sidebarheading name="MAIN"></Sidebarheading>
          <Sidebaritems name="Dashboard"></Sidebaritems>
          <Sidebaritems name="Messages"></Sidebaritems>
          <Sidebaritems name="Bookings"></Sidebaritems>
          <Sidebaritems name="Wallet"></Sidebaritems>
          <Sidebarheading name="LISTINGS"></Sidebarheading>
          <Sidebaritems name="My Listings"></Sidebaritems>
          <Sidebaritems name="Reviews"></Sidebaritems>
          <Sidebaritems name="Bookmarks"></Sidebaritems>
          <Sidebaritems name="Add Listings"></Sidebaritems>
          <Sidebarheading name="ACCOUNT"></Sidebarheading>
          <Sidebaritems name="My Profile"></Sidebaritems>
          <Sidebaritems name="Logout"></Sidebaritems>
        </div>
        <div className='flex-column width80'>
          <div>
            <Nav></Nav>
          </div>
          <div>
            <Maincontentheading></Maincontentheading>
          </div>
          <div className='flex width100'>
            <Maincontentcenter number="6" name="Active"></Maincontentcenter>
            <Maincontentcenter number="726" name="Total Views"></Maincontentcenter>
            <Maincontentcenter number="95" name="Total Reviews"></Maincontentcenter>
            <Maincontentcenter number="126" name="Times Books"></Maincontentcenter>
          </div>
          <div className='flex width100'>
            <Maincontentbottom name="Recent Activities"></Maincontentbottom>
            <Maincontentbottom name="Invoices"></Maincontentbottom>
          </div>
        </div>
      </div>
    </div>
  </>
);

