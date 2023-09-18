import React, { useState, useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  NowPlayingMovieProps,
  movieInterface,
} from "../../interface/interface";
import { fetchNowPlayingMovieData } from "../../actions/FetchNowPlayingMovieAction";
import { setSelectedMovieData } from "../../actions/SelectedDataAction";
import { RootState } from "../../reducers/RootReducer";
import ButtonData from "../../components/ButtonData";
import { documentHeight, scrollTop, uniqueArrayFilter, windowHeight } from "../../constant/common";
import { RouterConst } from "../../constant/constants";
import "../../styles/Views.scss";

const NowPlayingMovie: React.FC<NowPlayingMovieProps> = ({
  fetchData,
  totalPages,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<movieInterface[]>(
    []
  );
  const count = useRef(0);

  useEffect(() => {
    const loadMoreData = () => {
      if(pageNumber <= (totalPages)){
        setTimeout(() => {
          dispatch(fetchNowPlayingMovieData(pageNumber));
        }, 100);
      }
    };
    loadMoreData();
  }, [pageNumber]);

  useEffect(() => {
    if (count.current !== 0) {
      setPageNum(pageNum + 1);
      dispatch(fetchNowPlayingMovieData(pageNum));
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = nowPlayingMovies;
    fetchData.map((x: any) => tempArray.push(x));
    const uniqueArray: any = tempArray.filter(uniqueArrayFilter);
    setTimeout(() => {
      setNowPlayingMovies(uniqueArray);
    }, 100);
  }, [fetchData]);

  useEffect(() => {
    const handleScroll = () => {
      if (windowHeight + scrollTop === documentHeight) {
        setPageNumber((test) => test + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
  fetchData: state.fetchNowPlayingMovieData.data,
  totalPages: state.fetchNowPlayingMovieData.totalPages,
});
export default connect(mapStateToProps)(NowPlayingMovie);
