import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  getNowPlayingDrama,
  getNowPlayingMovies,
} from "../services/api.service";
import { movieInterface, popularDramaInterface } from "../interface/interface";
import { setSelectedMovieData, setSelectedDramaData } from "../actions/DataActions";
import { RootState } from "../reducers/rootReducer";
import ShowType from "../components/ShowType";
import ButtonData from "../components/ButtonData";
import DataViewType from "../components/DataViewType";
import { RouterConst, ShowTypeConst } from "../constant/constants";
import { CommonTxt } from "../constant/text";
import "../styles/Views.scss";

interface NowPlayingProps {
  showType: string;
}
const NowPlaying: React.FC<NowPlayingProps> = ({ showType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nowPlayingMovies, setNowPlayingMovies] = useState<movieInterface[]>(
    []
  );
  const [nowPlayingDrama, setNowPlayingDrama] = useState<
    popularDramaInterface[]
  >([]);

  const fetchNowPlaying = async () => {
    let res = await getNowPlayingMovies();
    if (res) {
      setNowPlayingMovies(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  const fetchNowPlayingDrama = async () => {
    let res = await getNowPlayingDrama();
    if (res) {
      setNowPlayingDrama(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    fetchNowPlayingDrama();
  }, []);

  const onClickCellMovies = (c: movieInterface) => {
    dispatch(setSelectedMovieData(c));
    navigate(RouterConst.MOVIE_DETAILS);
  };

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };

  return (
    <Grid>
      <ShowType />
      <DataViewType />
      <Grid className="now-playing--card-arr">
        {showType === ShowTypeConst.MOVIE
          ? nowPlayingMovies.map((item: movieInterface, index: any) => (
              <ButtonData
                key={index}
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                title={item.title}
                dataMovie={item}
                onClickMovie={onClickCellMovies}
              />
            ))
          : nowPlayingDrama.map((item: popularDramaInterface, index: any) => (
              <ButtonData
                key={index}
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                title={item.original_name}
                dataDrama={item}
                onClickDrama={onClickCellDrama}
              />
            ))}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  showType: state.showType.showType,
});
export default connect(mapStateToProps)(NowPlaying);
