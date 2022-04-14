import mostlySunny from "../assets/animated/2.svg";
import sunny from "../assets/animated/sunny.svg";
import hazyDay from "../assets/animated/haze-day.svg";
import overcastDay from "../assets/animated/overcastDay.svg";
import cloudy from "../assets/animated/cloudy.svg";
import overcast from "../assets/animated/overcast.svg";
import fog from "../assets/animated/fog.svg";
import rain from "../assets/animated/rain.svg";
import partlyCloudyDrizzle from "../assets/animated/partlyCloudyDrizzle.svg";
import thunderstormsDayRain from "../assets/animated/thunderstormsDayRain.svg";
import partlyCloudyRain from "../assets/animated/partlyCloudyRain.svg";
import sleet from "../assets/animated/sleet.svg";
import snow from "../assets/animated/snow.svg";
import partlyCloudySnow from "../assets/animated/partlyCloudySnow.svg";
import hot from "../assets/animated/hot.svg";
import cold from "../assets/animated/cold.svg";
import wind from "../assets/animated/wind.svg";
import clearNight from "../assets/animated/clearNight.svg";
import overcastNight from "../assets/animated/overcastNight.svg";
import partlyCloudyNight from "../assets/animated/partlyCloudyNight.svg";
import partlyNightHaze from "../assets/animated/partlyNightHaze.svg";
import partlyNightRain from "../assets/animated/partlyNightRain.svg";

const chooseIcon = (iconNumber) => {
  switch (iconNumber) {
    case 1:
      return sunny;
    case 2:
      return mostlySunny;
    case 3:
      return mostlySunny;
    case 4:
      return mostlySunny;
    case 5:
      return hazyDay;
    case 6:
      return overcastDay;
    case 7:
      return cloudy;
    case 8:
      return overcast;
    case 11:
      return fog;
    case 12:
      return rain;
    case 13:
      return partlyCloudyDrizzle;
    case 14:
      return partlyCloudyDrizzle;
    case 15:
      return thunderstormsDayRain;
    case 16:
      return partlyCloudyRain;
    case 17:
      return partlyCloudyRain;
    case 18:
      return partlyCloudyRain;
    case 19:
      return sleet;
    case 20:
      return partlyCloudyRain;
    case 21:
      return partlyCloudyRain;
    case 22:
      return snow;
    case 23:
      return partlyCloudySnow;
    case 24:
      return snow;
    case 25:
      return sleet;
    case 26:
      return rain;
    case 29:
      return sleet;
    case 30:
      return hot;
    case 31:
      return cold;
    case 32:
      return wind;
    case 33:
      return clearNight;
    case 34:
      return overcastNight;
    case 35:
      return partlyCloudyNight;
    case 36:
      return partlyCloudyNight;
    case 37:
      return partlyNightHaze;
    case 38:
      return partlyCloudyNight;
    case 39:
      return partlyNightRain;
    case 40:
      return partlyNightRain;
    case 41:
      return partlyNightRain;
    case 42:
      return partlyNightRain;
    case 43:
      return partlyNightRain;
    case 44:
      return partlyNightRain;
    default:
      return mostlySunny;
  }
};

const IconDispenser = ({ iconNumber }) => {
  const iconToRender = chooseIcon(iconNumber);

  return (
    <img
      src={iconToRender}
      style={{ height: "140px", width: "140px" }}
      alt="weather-icon"
    />
  );
};

export default IconDispenser;
