import "./dashBoard.scss";
import searchIcon from "../../assets/searchIcon.png";
import bellIcon from "../../assets/bellIcon.svg";
import smsIcon from "../../assets/smsIcon.svg";
import giftIcon from "../../assets/giftIcon.svg";
import settinIcon from "../../assets/settingIcon.svg";
import dropDown from "../../assets/dropDownImg.svg";
import periodIcon from "../../assets/periodIcon.svg";
import dropDownIcon from "../../assets/dropdownIcon.svg";
import cardImg from "../../assets/cardImg1.png";
// import uparrow from "../../assets/upArrow.svg";
import { ReactComponent as Uparrow } from "../../assets/upArrow.svg";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        {/* header */}
        <header className="head">
          <div className="head__search">
            <input className="head__input" type="text" placeholder="search" />
            <img
              className="head__searchIcon"
              src={searchIcon}
              alt="searchIcon"
            />
          </div>
          <div className="icons">
            <div className="icons__iconImg">
              <img src={bellIcon} alt="bellIcon" />
              <span className="icons__notificationNumber">21</span>
            </div>
            <div className="icons__iconImg">
              <img src={smsIcon} alt="bellIcon" />
              <span className="icons__notificationNumber">21</span>
            </div>
            <div className="icons__iconImg">
              <img src={giftIcon} alt="bellIcon" />
              <span className="icons__notificationNumber">21</span>
            </div>
            <div className="icons__iconImg">
              <img src={settinIcon} alt="bellIcon" />
              <span className="icons__notificationNumber">21</span>
            </div>
          </div>
          <div className="dropDown">
            <p className="dropDown__text">
              Hello, <span>Samantha</span>
            </p>
            <div className="dropDown__img">
              <img src={dropDown} alt="dropDown" />
            </div>
          </div>
        </header>
        {/* subHeader */}
        <div className="subHeader">
          <div className="subHeader__text">
            <h3>Dashboard</h3>
            <p>Hi, Samantha. Welcome back to Sedap Admin!</p>
          </div>
          <div className="subHeader__dropDown">
            <div className="subHeader__img">
              <img src={periodIcon} alt="periodIcon" />
            </div>
            <h4 className="subHeader__optns">
              Filter Periode <span>17 April 2020 - 21 May 2020</span>
            </h4>
            <img src={dropDownIcon} alt="dropDownIcon" />
          </div>
        </div>
        {/* card */}
        <div className="card">
          <div className="card__singleContent">
            <div className="card__img">
              <img src={cardImg} alt="cardImg" />
            </div>
            <div className="card__info">
              <h1>75</h1>
              <p>Total Orders</p>
              <div className="card__data">
                <div className="card__icon">
                  <Uparrow />
                </div>
                <span>4% (30 days)</span>
              </div>
            </div>
          </div>
          <div className="card__singleContent">
            <div className="card__img">
              <img src={cardImg} alt="cardImg" />
            </div>
            <div className="card__info">
              <h1>75</h1>
              <p>Total Orders</p>
              <div className="card__data">
                <div className="card__icon">
                  <Uparrow />
                </div>
                <span>4% (30 days)</span>
              </div>
            </div>
          </div>
          <div className="card__singleContent">
            <div className="card__img">
              <img src={cardImg} alt="cardImg" />
            </div>
            <div className="card__info">
              <h1>75</h1>
              <p>Total Orders</p>
              <div className="card__data">
                <div className="card__icon">
                  <Uparrow />
                </div>
                <span>4% (30 days)</span>
              </div>
            </div>
          </div>
          <div className="card__singleContent">
            <div className="card__img">
              <img src={cardImg} alt="cardImg" />
            </div>
            <div className="card__info">
              <h1>75</h1>
              <p>Total Orders</p>
              <div className="card__data">
                <div className="card__icon">
                  <Uparrow />
                </div>
                <span>4% (30 days)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
