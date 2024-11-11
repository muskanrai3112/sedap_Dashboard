import "./dashBoard.scss";
import searchIcon from "../../assets/searchIcon.png";
import bellIcon from "../../assets/bellIcon.svg";
import smsIcon from "../../assets/smsIcon.svg";
import giftIcon from "../../assets/giftIcon.svg";
import settinIcon from "../../assets/settingIcon.svg";
import dropDown from "../../assets/dropDownImg.svg";
import periodIcon from "../../assets/periodIcon.svg";
import dropDownIcon from "../../assets/dropDownIcon.svg";
import cardImg from "../../assets/cardImg1.png";
// import uparrow from "../../assets/upArrow.svg";
import { ReactComponent as Uparrow } from "../../assets/upArrow.svg";
import revenueGraph from "../../assets/revenueGraph.png";
import staticGraph from "../../assets/revenueStatic.png";
import { ReactComponent as DownArrow } from "../../assets/downarrow.svg";
import dotedIcon from "../../assets/dotedIcon.svg";
import avatar from "../../assets/avatar.png";
import rating from "../../assets/RatingImg.png";
import Slider from "react-slick";
import { ReactComponent as LeftSlideArrow } from "../../assets/LeftslideArrow.svg";
import { ReactComponent as RightSlideArrow } from "../../assets/RightSlideArrow.svg";
import { HiMiniBars3 } from "react-icons/hi2";

const Dashboard = ({ onMenuOpen }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          with: 1800,
        },
      },
    ],
  };

  return (
    <>
      <div className="dashboard">
        {/* header */}
        <header className="head">
          <button className="head__bar" onClick={onMenuOpen}>
            <HiMiniBars3 />
          </button>
          <div>
            <div className="head__search">
              <input className="head__input" type="text" placeholder="search" />
              <img
                className="head__searchIcon"
                src={searchIcon}
                alt="searchIcon"
              />
            </div>
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
          <div className="head__mobileSeach">
            <img src={searchIcon} alt="" />
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

        {/*graph */}
        <div className="graph">
          <div className="revenueGraph">
            <div className="revenue">
              <h5 className="revenue__title">Total Revenue</h5>
              <div className="revenue__data">
                <div className="revenue__singleData">
                  <span></span>
                  <p>2020</p>
                </div>
                <div className="revenue__singleData">
                  <span></span>
                  <p>2020</p>
                </div>
              </div>
            </div>
            <div className="revenue__img">
              <img src={revenueGraph} alt="revenueGraph" />
            </div>
          </div>
          {/* revenue static */}
          <div className="columnrevenue">
            <div className="revenue">
              <h5 className="revenue__title">Customer Map</h5>
              <div className="selector">
                <div className="dropDownMenu">
                  <select>
                    <option value="volvo">Weekly</option>
                    <option value="saab">Monthely</option>
                    <option value="opel">Daily</option>
                  </select>
                  <div>
                    <DownArrow />
                  </div>
                </div>
                <div>
                  <img src={dotedIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="revenue__img">
              <img src={staticGraph} alt="revenueGraph" />
            </div>
          </div>
        </div>
        {/* testimonial */}
        <div className="testimonial">
          <div className="testimonial__head">
            <div className="testimonial__titles">
              <h3 className="testimonial__title">Customer Review</h3>
              <h6 className="testimonial__subTitle">
                Eum fuga consequuntur utadsjn et.
              </h6>
            </div>
            <div className="testimonial__slideArrows">
              <div className="testimonial__slideArrow">
                <LeftSlideArrow />
              </div>
              <div className="testimonial__slideArrow">
                <RightSlideArrow />
              </div>
            </div>
          </div>
          {/* testimonialcard */}
          <div className="testimonialCard">
            <Slider {...settings}>
              <div className="testimonialCard__cards">
                <div className="testimonialCard__avatarInfo">
                  <img src={avatar} alt="avatar" />
                  <div className="">
                    <h6 className="testimonialCard__avatarName">Jons Sena</h6>
                    <p className="testimonialCard__avatarTime">2 days ago</p>
                  </div>
                </div>
                <p className="testimonialCard__para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text
                </p>
                <div className="testimonialCard__rating">
                  <img src={rating} alt="rating" />
                  <span>4.5</span>
                </div>
              </div>
              <div className="testimonialCard__cards">
                <div className="testimonialCard__avatarInfo">
                  <img src={avatar} alt="avatar" />
                  <div className="">
                    <h6 className="testimonialCard__avatarName">Jons Sena</h6>
                    <p className="testimonialCard__avatarTime">2 days ago</p>
                  </div>
                </div>
                <p className="testimonialCard__para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text
                </p>
                <div className="testimonialCard__rating">
                  <img src={rating} alt="rating" />
                  <span>4.5</span>
                </div>
              </div>
              <div className="testimonialCard__cards">
                <div className="testimonialCard__avatarInfo">
                  <img src={avatar} alt="avatar" />
                  <div className="">
                    <h6 className="testimonialCard__avatarName">Jons Sena</h6>
                    <p className="testimonialCard__avatarTime">2 days ago</p>
                  </div>
                </div>
                <p className="testimonialCard__para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text
                </p>
                <div className="testimonialCard__rating">
                  <img src={rating} alt="rating" />
                  <span>4.5</span>
                </div>
              </div>
              <div className="testimonialCard__cards">
                <div className="testimonialCard__avatarInfo">
                  <img src={avatar} alt="avatar" />
                  <div className="">
                    <h6 className="testimonialCard__avatarName">Jons Sena</h6>
                    <p className="testimonialCard__avatarTime">2 days ago</p>
                  </div>
                </div>
                <p className="testimonialCard__para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text
                </p>
                <div className="testimonialCard__rating">
                  <img src={rating} alt="rating" />
                  <span>4.5</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
