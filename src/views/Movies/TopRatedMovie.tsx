import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  DisplayMovieProps,
  movieInterface,
} from "../../interface/interface";
import { fetchTopRatedMovieData } from "../../actions/FetchDataAction";
import { setSelectedMovieData } from "../../actions/SelectedDataAction";
import { RootState } from "../../reducers/RootReducer";
import ButtonData from "../../components/ButtonData";
import { documentHeight, scrollTop, uniqueArrayFilter, windowHeight } from "../../constant/common";
import { RouterConst } from "../../constant/constants";
import "../../styles/Views.scss";

const TopRatedMovie: React.FC<DisplayMovieProps> = ({
  fetchData,
  totalPages,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [topRatedMovie, setTopRatedMovie] = useState<movieInterface[]>(
    []
  );
  const count = useRef(0);

  useEffect(() => {
    const loadMoreData = () => {
      if(pageNumber <= (totalPages)){
        setTimeout(() => {
          dispatch(fetchTopRatedMovieData(pageNumber));
        }, 100);
      }
    };
    loadMoreData();
  }, [pageNumber]);

  useEffect(() => {
    if (count.current !== 0) {
      setPageNum(pageNum + 1);
      setTimeout(() => {
        dispatch(fetchTopRatedMovieData(pageNum));
      }, 2000)
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = topRatedMovie;
    if(pageNum !== 1){
      fetchData.map((x: any) => tempArray.push(x));
      let uniqueArray: any = tempArray.filter(uniqueArrayFilter);
      uniqueArray = uniqueArray.filter((x: any) => x.adult===false);
      setTimeout(() => {
        setTopRatedMovie(uniqueArray);
      }, 100);
    }
  }, [fetchData]);

  
  const handleScroll = () => {
    if (windowHeight + scrollTop === documentHeight) {
      setPageNumber((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const onClickCellMovies = (c: movieInterface) => {
    dispatch(setSelectedMovieData(c));
    navigate(RouterConst.MOVIE_DETAILS);
  };

  return (
    <Grid className="common--padding">
      <Grid className="now-playing--card-arr">
        {topRatedMovie.map((item: movieInterface, index: any) => (
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
  fetchData: state.fetchTopRatedMovieData.data,
  totalPages: state.fetchTopRatedMovieData.totalPages,
});
export default connect(mapStateToProps)(TopRatedMovie);
