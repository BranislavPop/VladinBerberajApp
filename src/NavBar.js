import './NavBar.css';
import logo from './logo192.png';
import menuOnClick from './functions';

function NavBar() {
    return (
        <div className="navBar" role={"banner"}>
            <div className={"more"}>
                <img src={logo} alt={"LOGO"} className={"logoImg"}/>
                <button className={"menuButton"} onClick={menuOnClick}>
                    <svg width={50} height={50}>
                        <rect width={50} height={12.5}/>
                        <rect width={50} height={12.5}/>
                        <rect width={50} height={12.5}/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
export default NavBar;