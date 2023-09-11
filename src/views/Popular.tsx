import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getPopularMovies, getPopularDrama } from "../services/api.service";
import {
  popularMoviesInterface,
  popularDramaInterface,
  PopularProps,
} from "../interface/interface";
import {
  setSelectedDramaData,
  setSelectedMovieData,
} from "../actions/SelectedDataAction";
import { setShowType } from "../actions/ShowTypeAction";
import { RootState } from "../reducers/RootReducer";
import { fetchPopularMovieData } from "../actions/FetchPopularMovieDataAction";
import { fetchPopularDramaData } from "../actions/FetchPopularDramaDataAction";
import DataDisplay from "../components/DataDisplay";
import ScrollBox from "../components/ScrollBox";
import PageTitle from "../components/PageTitle";
import LoadMoreButton from "../components/LoadMoreButton";
import PageContent from "../components/PageContent";
import ShowType from "../components/ShowType";
import { RouterConst, ShowTypeConst } from "../constant/constants";
import { CommonTxt, PopularTxt } from "../constant/text";
import "../styles/Views.scss";

const Popular: React.FC<PopularProps> = ({
  showType,
  fetchMovieData,
  fetchDramaData,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [movieList, setMovieList] = useState<popularMoviesInterface[]>([]);
  const [dramaList, setDramaList] = useState<popularDramaInterface[]>([]);
  const [pageNumMovie, setPageNumMovie] = useState<number>(1);
  const [pageNumDrama, setPageNumDrama] = useState<number>(1);
  const isMovieLoaded = movieList.length > 0;
  const isDramaLoaded = dramaList.length > 0;
  const countMovie = useRef(0);
  const countDrama = useRef(0);

  const loadMoreMovieData = () => {
    setTimeout(() => {
      dispatch(fetchPopularMovieData(pageNumMovie));
      setPageNumMovie(pageNumMovie + 1);
    }, 1000);
  };

  const loadMoreDramaData = () => {
    setTimeout(() => {
      dispatch(fetchPopularDramaData(pageNumDrama));
      setPageNumDrama(pageNumDrama + 1);
    }, 1000);
  };

  useEffect(() => {
    if (countMovie.current !== 0) {
      setPageNumMovie(pageNumMovie + 1);
      setPageNumDrama(pageNumDrama + 1);
      dispatch(fetchPopularMovieData(pageNumMovie));
      dispatch(fetchPopularDramaData(pageNumDrama));
    }
    countMovie.current++;
  }, [dispatch]);

  useEffect(() => {
    if (showType === ShowTypeConst.MOVIE) {
      let tempArray: any = movieList;
      fetchMovieData.map((x: any) => tempArray.push(x));
      tempArray = tempArray.filter(
        (item: any, index: any, array: string | any[]) => {
          return array.indexOf(item) === index;
        }
      );
      setMovieList(tempArray);
    } else if (showType === ShowTypeConst.DRAMA) {
      let tempArray: any = dramaList;
      fetchDramaData.map((x: any) => tempArray.push(x));
      tempArray = tempArray.filter(
        (item: any, index: any, array: string | any[]) => {
          return array.indexOf(item) === index;
        }
      );
      setDramaList(tempArray);
    }
  }, [fetchMovieData, fetchDramaData, showType]);

  const onClickCellMovie = (c: popularMoviesInterface) => {
    dispatch(setSelectedMovieData(c));
    navigate(RouterConst.MOVIE_DETAILS);
  };

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };

  return (
    <PageContent>
      <PageTitle title={PopularTxt.title}>
        <ShowType />
      </PageTitle>
      <ScrollBox>
        {showType === ShowTypeConst.MOVIE
          ? movieList.map((row: popularMoviesInterface, index: number) => (
              <DataDisplay
                src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
                title={row.title}
                key={index}
                dataPopularMovie={row}
                onClickPopularMovie={() => onClickCellMovie(row)}
              />
            ))
          : dramaList.map((row: popularDramaInterface, index: number) => (
              <DataDisplay
                src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
                title={row.original_name}
                key={index}
                dataPopularDrama={row}
                onClickPopularDrama={() => onClickCellDrama(row)}
              />
            ))}
        {showType === ShowTypeConst.MOVIE && isMovieLoaded && (
          <LoadMoreButton onClick={loadMoreMovieData} />
        )}
        {showType === ShowTypeConst.DRAMA && isDramaLoaded && (
          <LoadMoreButton onClick={loadMoreDramaData} />
        )}
      </ScrollBox>
    </PageContent>
  );
};

const mapStateToProps = (state: RootState) => ({
  showType: state.showType.showType,
  fetchMovieData: state.fetchPopularMovieData.data,
  fetchDramaData: state.fetchPopularDramaData.data,
});
export default connect(mapStateToProps)(Popular);
