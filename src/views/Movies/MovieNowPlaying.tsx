import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { getNowPlayingMovies } from "../../services/api.service";
import { movieInterface } from "../../interface/interface";
import { setSelectedMovieData } from "../../actions/SelectedDataAction";
import { RootState } from "../../reducers/RootReducer";
import ButtonData from "../../components/ButtonData";
import { RouterConst } from "../../constant/constants";
import { CommonTxt } from "../../constant/text";
import "../../styles/Views.scss";

const MovieNowPlaying: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nowPlayingMovies, setNowPlayingMovies] = useState<movieInterface[]>(
    []
  );

  const fetchNowPlaying = async () => {
    let res = await getNowPlayingMovies();
    if (res) {
      setNowPlayingMovies(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const onClickCellMovies = (c: movieInterface) => {
    dispatch(setSelectedMovieData(c));
    navigate(RouterConst.MOVIE_DETAILS);
  };

  return (
    <Grid className="common--padding">
      <Grid className="now-playing--card-arr">
        {nowPlayingMovies.map((item: movieInterface, index: any) => (
          <ButtonData
            key={index}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            title={item.title}
            dataMovie={item}
            onClickMovie={onClickCellMovies}
          />
        ))}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  showType: state.showType.showType,
});
export default connect(mapStateToProps)(MovieNowPlaying);
