import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  popularMoviesInterface,
  popularDramaInterface,
  PopularMovieProps,
} from "../../interface/interface";
import { setSelectedMovieData } from "../../actions/SelectedDataAction";
import { RootState } from "../../reducers/RootReducer";
import { fetchPopularMovieAction } from "../../actions/FetchDataAction";
import DataDisplay from "../../components/DataDisplay";
import LoadMoreButton from "../../components/LoadMoreButton";
import { uniqueArrayFilter } from "../../constant/common";
import { RouterConst } from "../../constant/constants";
import "../../styles/Views.scss";

const PopularMovie: React.FC<PopularMovieProps> = ({ fetchMovieData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [list, setList] = useState<popularMoviesInterface[]>([]);
  const [pageNumMovie, setPageNumMovie] = useState<number>(1);
  const isMovieLoaded = list.length > 0;
  const count = useRef(0);

  const loadMoreMovieData = () => {
    setTimeout(() => {
      dispatch(fetchPopularMovieAction(pageNumMovie));
      setPageNumMovie(pageNumMovie + 1);
    }, 1000);
  };

  useEffect(() => {
    if (count.current !== 0) {
      setPageNumMovie(pageNumMovie + 1);
      dispatch(fetchPopularMovieAction(pageNumMovie));
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = list;
    fetchMovieData.map((x: any) => tempArray.push(x));
    tempArray = tempArray.filter(uniqueArrayFilter);
    tempArray = tempArray.filter((x: any) => x.adult === false);
    setList(tempArray);
  }, [fetchMovieData]);

  const onClickCellMovie = (c: popularMoviesInterface) => {
    dispatch(setSelectedMovieData(c));
    navigate(RouterConst.MOVIE_DETAILS);
  };

  return (
    <>
      {list.map((row: popularMoviesInterface, index: number) => (
        <DataDisplay
          src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
          title={row.title}
          key={index}
          dataPopularMovie={row}
          onClickPopularMovie={() => onClickCellMovie(row)}
        />
      ))}
      {isMovieLoaded && <LoadMoreButton onClick={loadMoreMovieData} />}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  fetchMovieData: state.fetchPopularMovieData.data,
  totalMoviePages: state.fetchPopularMovieData.totalPages,
});
export default connect(mapStateToProps)(PopularMovie);
