import Aviator from "../../assets/aviator.webp";
import Casino from "../../assets/casino.webp";
import Racing from "../../assets/racing.webp";
const SecondaryBanner = () => {
    return  <div className="flex w-full  justify-between px-1.5 gap-1.5">
    <div>
      <img src={Aviator} alt="casion" />
    </div>
    <div>
      <img src={Casino} alt="casion" />
    </div>
    <div>
      <img src={Racing} alt="casion" />
    </div>
  </div>
}

export default SecondaryBanner