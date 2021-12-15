import React from 'react';
import UserDetails from './components/DisplayUser';
import EditUser from './components/EditUser';
import './components/style.css'

const App = () => {
  return ( // <UserDetails /> line 44 | <EditUser /> line 48 
    <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: "100vh", flexGrow: 1}}>
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            <div className="box-root flex-flex" style={{gridArea: "top / start / 8 / end"}}>
              <div className="box-root" style={{backgroundImage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", flexGrow: 1}}>
              </div>
            </div>
            <div className="box-root flex-flex" style={{gridArea: "4 / 2 / auto / 5"}}>
              <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
            </div>
            <div className="box-root flex-flex" style={{gridArea: "6 / start / auto / 2"}}>
              <div className="box-root box-background--blue800" style={{flexGrow: 1}}></div>
            </div>
            <div className="box-root flex-flex" style={{gridArea: "7 / start / auto / 4"}}>
              <div className="box-root box-background--blue animationLeftRight" style={{flexGrow: 1}}></div>
            </div>
            <div className="box-root flex-flex" style={{gridArea: "8 / 4 / auto / 6"}}>
              <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
            </div>
            <div className="box-root flex-flex" style={{gridArea: "2 / 15 / auto / end"}}>
              <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
            </div>
            <div className="box-root flex-flex" style={{gridArea: "3 / 14 / auto / end"}}>
              <div className="box-root box-background--blue animationRightLeft" style={{flexGrow: 1}}></div>
            </div>
            <div className="box-root flex-flex" style={{gridArea: "4 / 17 / auto / 20"}}>
              <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
            </div>
            <div className="box-root flex-flex" style={{gridArea: "5 / 14 / auto / 17"}}>
              <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{flexGrow: 1}}></div>
            </div>
          </div>
        </div>
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center card">
            <UserDetails />
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <EditUser />
            </div>
            <div className="footer-link padding-top--24">
              <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center card">
                <span><a href="mailto:idanharari112@gmail.com">Email</a></span>
                <span><a href="https://idanharari.netlify.app/" target='_blank' rel="noreferrer">© Idan Harari</a></span>
                <span><a href="tel:+972549507320" rel="noreferrer">Phone</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default App;
