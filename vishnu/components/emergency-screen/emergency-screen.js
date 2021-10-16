import classes from "./emergency.module.css";
import Image from "next/image";
import hero from "../../public/emergency1.png";
import hero1 from "../../public/e2.png";
import hero2 from "../../public/e3.png";
import hero3 from "../../public/e4.png";

function EmergencyScreen() {
  return (
    <div className={classes.emergency}>
      <h1>Emergency Assistance</h1>
      <p>
        <span>
          If you are in an emergency situation or need immediate assistance,
          contact mental health services or emergency services on&nbsp;
        </span>
        <a href="tel:000">000</a>
        <span>.</span>
      </p>
      <div className={classes.gg}>
        <a href="tel:000">
          <div>
            <Image src={hero} alt="hero" width={90} height={90} />
          </div>
          <div>Call 000</div>
          <div></div>
        </a>
      </div>
      <p>
        If you need to speak to someone urgently, call&nbsp;Lifeline{" "}
        <a href="tel:131114">13 11 14</a>&nbsp;or&nbsp;Suicide Call Back Service{" "}
        <a href="tel:1300659467">1300 659 467</a>.
      </p>
      <div className={classes.flexgg}>
        <div className={classes.gg}>
          <a href="tel:000">
            <div>
              <Image src={hero3} alt="hero" width={90} height={90} />
            </div>
            <div>Chat Online</div>
            <div></div>
          </a>
        </div>
        <div className={classes.gg}>
          <a href="tel:000">
            <div>
              <Image src={hero2} alt="hero" width={100} height={90} />
            </div>
            <div>Call 13 11 14</div>
            <div></div>
          </a>
        </div>
        <div className={classes.gg}>
          <a href="tel:000">
            <div>
              <Image src={hero1} alt="hero" width={150} height={90} />
            </div>
            <div>Call or chat online</div>
            <div></div>
          </a>
        </div>
      </div>
      <p>
        If it's not an emergency, find your nearest headspace centre and you can
        speak to one of our counsellors or create an account to access online
        support.
      </p>
      <div className={classes.flexgg}>
        <div className={classes.gg}>
          <a href="tel:000">
            <div>
              <Image src={hero3} alt="hero" width={90} height={90} />
            </div>
            <div>Find a center</div>
            <div></div>
          </a>
        </div>
        <div className={classes.gg}>
          <a href="tel:000">
            <div>
              <Image src={hero2} alt="hero" width={100} height={90} />
            </div>
            <div>Call or chat online</div>
            <div></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmergencyScreen;
