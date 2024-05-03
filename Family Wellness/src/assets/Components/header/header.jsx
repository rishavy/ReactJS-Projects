import classes from "./header.module.css";

function Header(){
    return(
        <div className={classes.Container}>
            <h1>Family Wellness</h1>
      <p>MASSGE THERAPY</p>
      <div className={classes.navi}>
            <button>HOME</button>
            <button>ABOUT</button>
            <button>SERVICES</button>
            <button>FAQ</button>
            <button>CONTACT</button>
        </div>
    </div>
)
}
export default Header;