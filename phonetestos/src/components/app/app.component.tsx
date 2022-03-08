import { Outlet } from 'react-router-dom';
import './_app.scss';

export default function AppComponent() {
  return ( 
    <>
      <div className="phone-wrapper">
        <div className="head-phone f-c">
          <div className="left-side"></div>
          <div className="notch">
            <div className="left"></div>
            <div className="main"></div>
            <div className="right"></div>
          </div>
          <div className="right-side">
            <div className="batery">
            <img src={ require('shared/components/svgs/image-removebg-preview.png') } />
            </div>
          </div>
        </div>
        <div className="home f-c">
          <div className="wrap">
            <div className="outlet f-c">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="bottom-phone f-c">
          <div className="three-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="circle"></div>
          <div className="back">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};