import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { DisplayMovieProps, movieInterface } from "../../interface/interface";
import { fetchDiscoverMovieAction } from "../../actions/FetchDataAction";
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
import Search from "../../components/Search";

const DiscoverMovie: React.FC<DisplayMovieProps> = ({
  fetchData,
  totalPages,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [list, setList] = useState<movieInterface[]>([]);
  const count = useRef(0);

  useEffect(() => {
    const loadMoreData = () => {
      if (pageNumber <= totalPages) {
        setTimeout(() => {
          dispatch(fetchDiscoverMovieAction(pageNumber));
        }, 100);
      }
    };
    loadMoreData();
  }, [pageNumber]);

  useEffect(() => {
    if (count.current !== 0) {
      setPageNum(pageNum + 1);
      setTimeout(() => {
        dispatch(fetchDiscoverMovieAction(pageNum));
      }, 2000);
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = list;
    if (pageNum !== 1) {
      fetchData?.map((x: any) => tempArray.push(x));
      let uniqueArray: any = tempArray.filter(uniqueArrayFilter);
      uniqueArray = uniqueArray.filter((x: any) => x.adult === false);
      setTimeout(() => {
        setList(uniqueArray);
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
        {list?.map((item: movieInterface, index: any) => (
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
  fetchData: state.fetchDiscoverMovieData.data,
  totalPages: state.fetchDiscoverMovieData.totalPages,
});

export default connect(mapStateToProps)(DiscoverMovie);
