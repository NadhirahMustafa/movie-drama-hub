import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  getTrendingMoviesDay,
  getTrendingMoviesWeek,
} from "../../services/api.service";
import { movieInterface, trendingInterface } from "../../interface/interface";
import { setSelectedMovieData } from "../../actions/SelectedDataAction";
import ButtonData from "../../components/ButtonData";
import ScrollToTop from "../../components/ScrollToTop";
import CommonButton from "../../components/Button";
import { RouterConst } from "../../constant/constants";
import { CommonTxt, frequencyTypeTxt } from "../../constant/text";
import "../../styles/Views.scss";

const TrendingMovie: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [daily, setDaily] = useState<boolean>(true);
  const [weekly, setWeekly] = useState<boolean>(false);
  const [dayList, setDayList] = useState<trendingInterface[]>([]);
  const [weekList, setWeekList] = useState<trendingInterface[]>([]);

  const handleDailyTrending = () => {
    setDaily(true);
    setWeekly(false);
  };

  const handleWeeklyTrending = () => {
    setDaily(false);
    setWeekly(true);
  };

  const fetchDailyTrendingList = async () => {
    let res = await getTrendingMoviesDay();
    if (res) {
      setDayList(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  const fetchWeeklyTrendingList = async () => {
    let res = await getTrendingMoviesWeek();
    if (res) {
      setWeekList(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchDailyTrendingList();
    fetchWeeklyTrendingList();
  }, []);

  const onClickCellMovies = (c: movieInterface) => {
    dispatch(setSelectedMovieData(c));
    navigate(RouterConst.MOVIE_DETAILS);
  };

  return (
    <Grid className="common--padding">
      <Grid className="common--padding">
          <CommonButton
            onClick={handleDailyTrending}
            title={frequencyTypeTxt.daily}
            className={daily ? 'trending--highlight': ''}
          />
          <CommonButton
            onClick={handleWeeklyTrending}
            title={frequencyTypeTxt.weekly}
            className={weekly ? 'trending--highlight': ''}
          />
      </Grid>
      {daily && (
        <Grid className="now-playing--card-arr">
          {dayList.map((item: movieInterface, index: any) => (
            <ButtonData
              key={index}
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              title={item.title}
              dataMovie={item}
              onClickMovie={onClickCellMovies}
            />
          ))}
        </Grid>
      )}
      {weekly && (
        <Grid className="now-playing--card-arr">
          {weekList.map((item: movieInterface, index: any) => (
            <ButtonData
              key={index}
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              title={item.title}
              dataMovie={item}
              onClickMovie={onClickCellMovies}
            />
          ))}
        </Grid>
      )}
      <ScrollToTop />
    </Grid>
  );
};

export default TrendingMovie;
