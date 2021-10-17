import Image from "next/Image";
import hero1 from "../../public/hero1.png";
import classes from "./dashboard.module.css";

function DashboardScreen() {
  return <div>
<div className={classes.flexgg}><div>
<p className={classes.leftbox}>hello world</p>
</div>
<div>
<Image src={hero1} alt="hero" width={1200} height={628} />
</div></div>
  </div>;
}

export default DashboardScreen;
