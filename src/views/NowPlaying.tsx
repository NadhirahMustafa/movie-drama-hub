import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import DataViewType from "../components/DataViewType";
import ButtonData from "../components/ButtonData";
import { setSelectedMovieData } from "../actions/DataActions";
import { movieInterface } from "../interface/interface";
import { CommonTxt } from "../constant/text";
import { getNowPlayingMovies } from "../services/api.service";
import "../styles/Views.scss";
import { RouterConst } from "../constant/constants";

const NowPlaying = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nowPlayingList, setNowPlayingList] = useState<movieInterface[]>([]);

  const fetchNowPlaying = async () => {
    let res = await getNowPlayingMovies();
    if (res) {
      setNowPlayingList(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const onClickCell = (c: movieInterface) => {
    console.log("text: ", c);
    dispatch(setSelectedMovieData(c));
    navigate(RouterConst.MOVIE_DETAILS);
  };

  return (
    <Grid>
      <DataViewType />
      <Grid className="now-playing--card-arr">
        {nowPlayingList.map((item: movieInterface, index: any) => (
          <ButtonData
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            title={item.title}
            dataMovie={item}
            onClickMovie={onClickCell}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default NowPlaying;
