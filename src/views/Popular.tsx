import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getPopularMovies, getPopularDrama } from "../services/api.service";
import {
  popularMoviesInterface,
  popularDramaInterface,
} from "../interface/interface";
import {
  setSelectedDramaData,
  setSelectedMovieData,
} from "../actions/DataActions";
import { setShowType } from "../actions/ShowTypeAction";
import DataDisplay from "../components/DataDisplay";
import ScrollBox from "../components/ScrollBox";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";
import ShowType from "../components/ShowType";
import { RouterConst, ShowTypeConst } from "../constant/constants";
import { CommonTxt, PopularTxt } from "../constant/text";
import "../styles/Views.scss";
import { RootState } from "../reducers/rootReducer";

interface PopularProps {
  showType: string;
}
const Popular: React.FC<PopularProps> = ({showType}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [movieList, setMovieList] = useState<popularMoviesInterface[]>([]);
  const [dramaList, setDramaList] = useState<popularDramaInterface[]>([]);

  const fetchPopularMovies = async () => {
    let res = await getPopularMovies();
    if (res) {
      setMovieList(res);
      setShowType(ShowTypeConst.MOVIE);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  const fetchPopularDrama = async () => {
    let res = await getPopularDrama();
    if (res) {
      setDramaList(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchPopularDrama();
  }, []);

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
      </ScrollBox>
    </PageContent>
  );
};

const mapStateToProps = (state: RootState) => ({
  showType: state.showType.showType
});
export default connect(mapStateToProps)(Popular);
