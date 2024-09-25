import { ReactComponent as Icon } from "../../assets/sidebarIcon.svg";
import { ReactComponent as CardImg } from "../../assets/cardImg.svg";
import "./sideBar.scss";

const SideBar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="sideBar__head">
          <h3 className="sideBar__title">
            Sedap<span>.</span>
          </h3>
          <p className="sideBar__subTitle">Modern Admin Dashboard</p>
        </div>
        <div>
          <div className="sideBar__menu">
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <Icon />
              <span>Dashboard</span>
            </a>
          </div>
          <div className="sideBar__card">
            <div className="sideBar__content">
              <p className="sideBar__cardPara">
                Please, organize your menus through button bellow!
              </p>

              <button className="sideBar__cardBtn"> + Add Menus</button>
            </div>
            <div>
              <CardImg />
            </div>
          </div>
          <div className="copyRight">
            <p className="copyRight__text">
              Sedap Restaurant Admin Dashboard
              <span> © 2020 All Rights Reserved</span>
            </p>

            <p className="copyRight__lastText">Made with❤️by Peterdraw</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
