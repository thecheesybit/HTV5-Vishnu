import Image from "next/image";
import hero from "../../public/hero.png";

function StartingPageContent() {
  return (
    <div>
      <div>
        <div className="leftbox">
          <h1>Welcome to Vishnu!</h1>
          <p></p>
        </div>
        <div className="rightbox">
          <Image src={hero} alt="hero" width={700} height={550} />
        </div>
      </div>
    </div>
  );
}

export default StartingPageContent;
