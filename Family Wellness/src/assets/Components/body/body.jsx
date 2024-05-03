import therapistImage from '../../images/Family-Wellness.webp';
import classes from "./body.module.css";
function Body(){
    return(
        <div className={classes.main}>
            <div className={classes.imgConatiner}>
                <img src={therapistImage} alt="Therapist" />
            </div>
            <div className={classes.card}>
            <div>
                <h1>Think Health. Think Massage.</h1>
                <p>We are open 9am to 6pm; Monday through Sunday. if you would like to schedule an appointment with us, please call us at 987.654.3210 today!</p>
            </div>
            <div className={classes.btns}>
                <button>LEARN MORE ABOUT US</button>
                <button>CONTACT US TODAY</button>
            </div>
        </div>
        <div className={classes.texts}>
            <p>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
            <p>We are committed to your long term helath and well-being. Our multi-disciplinary clinic provides a balanced approcach to a helthy lifestule.Enhance your hlath and improve your performance with ourtreatments.</p>
            <p>we welcome you to come explore all the benefits you will enjoy as one of our valued guests. Our professional staff is commited to offering the best massage therapy in Mainland.</p>
        </div>
        <div  className={classes.address}>
            <h2>Family Wellness Massage Therapy</h2>
            <p>9876 Main Street. Suit 123. Mainland, ML12345</p>
            <p>Phone: 987.654.3210</p>
        </div>
    </div>
)
}
export default Body
