import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  popularMoviesInterface,
  popularDramaInterface,
  PopularDramaProps,
} from "../../interface/interface";
import { setSelectedDramaData } from "../../actions/SelectedDataAction";
import { RootState } from "../../reducers/RootReducer";
import { fetchPopularDramaData } from "../../actions/FetchDataAction";
import DataDisplay from "../../components/DataDisplay";
import LoadMoreButton from "../../components/LoadMoreButton";
import { uniqueArrayFilter } from "../../constant/common";
import { RouterConst } from "../../constant/constants";
import "../../styles/Views.scss";

const PopularDrama: React.FC<PopularDramaProps> = ({ fetchDramaData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dramaList, setDramaList] = useState<popularDramaInterface[]>([]);
  const [pageNumDrama, setPageNumDrama] = useState<number>(1);
  const isDramaLoaded = dramaList.length > 0;
  const count = useRef(0);

  const loadMoreDramaData = () => {
    setTimeout(() => {
      dispatch(fetchPopularDramaData(pageNumDrama));
      setPageNumDrama(pageNumDrama + 1);
    }, 1000);
  };

  useEffect(() => {
    if (count.current !== 0) {
      setPageNumDrama(pageNumDrama + 1);
      dispatch(fetchPopularDramaData(pageNumDrama));
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = dramaList;
    fetchDramaData.map((x: any) => tempArray.push(x));
    tempArray = tempArray.filter(uniqueArrayFilter);
    tempArray = tempArray.filter((x: any) => x.adult !== false);
    setDramaList(tempArray);
  }, [fetchDramaData]);

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };

  return (
    <>
      {dramaList.map((row: popularDramaInterface, index: number) => (
        <DataDisplay
          src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
          title={row.name}
          key={index}
          dataPopularDrama={row}
          onClickPopularDrama={() => onClickCellDrama(row)}
        />
      ))}
      {isDramaLoaded && <LoadMoreButton onClick={loadMoreDramaData} />}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  fetchDramaData: state.fetchPopularDramaData.data,
  totalDramaPages: state.fetchPopularDramaData.totalPages,
});
export default connect(mapStateToProps)(PopularDrama);
