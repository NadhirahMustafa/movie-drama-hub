import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { DisplayMovieProps, movieInterface } from "../../interface/interface";
import { fetchNowPlayingMovieData } from "../../actions/FetchDataAction";
import { setSelectedMovieData } from "../../actions/SelectedDataAction";
import { RootState } from "../../reducers/RootReducer";
import ButtonData from "../../components/ButtonData";
import ScrollToTop from "../../components/ScrollToTop";
import {
  documentHeight,
  scrollTop,
  uniqueArrayFilter,
  windowHeight,
} from "../../constant/common";
import { RouterConst } from "../../constant/constants";
import "../../styles/Views.scss";

const NowPlayingMovie: React.FC<DisplayMovieProps> = ({
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
      if (pageNumber <= totalPages) {
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
      setTimeout(() => {
        dispatch(fetchNowPlayingMovieData(pageNum));
      }, 2000);
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = nowPlayingMovies;
    if (pageNum !== 1) {
      fetchData?.map((x: any) => tempArray.push(x));
      let uniqueArray: any = tempArray.filter(uniqueArrayFilter);
      uniqueArray = uniqueArray.filter((x: any) => x.adult===false);
      setTimeout(() => {
        setNowPlayingMovies(uniqueArray);
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
        {nowPlayingMovies?.map((item: movieInterface, index: any) => (
          <ButtonData
            key={index}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            title={item.title}
            dataMovie={item}
            onClickMovie={onClickCellMovies}
          />
        ))}
      </Grid>
      <ScrollToTop />
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  fetchData: state.fetchNowPlayingMovieData.data,
  totalPages: state.fetchNowPlayingMovieData.totalPages,
});
export default connect(mapStateToProps)(NowPlayingMovie);
