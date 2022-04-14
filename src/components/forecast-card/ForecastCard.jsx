import moment from "moment";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import IconDispenser from "../../utils/IconDispenser";
import { ForecastCardPaper } from "./ForecastCard.styled";

export const ForecastCard = ({ day, iconNum, minTemp, maxTemp, unit }) => {
  const { darkModeOn } = useSelector((state) => state.darkMode);

  return (
    <ForecastCardPaper elevation={5} darkModeOn={darkModeOn}>
      <Typography variant="h5">{moment(day).format("dddd")}</Typography>
      <IconDispenser iconNumber={iconNum} />
      <Typography variant="subtitle1">
        {minTemp}-{maxTemp} {unit}
      </Typography>
    </ForecastCardPaper>
  );
};

export default ForecastCard;
