import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  popularDramaInterface,
  PopularDramaProps,
} from "../../interface/interface";
import { setSelectedDramaData } from "../../actions/SelectedDataAction";
import { RootState } from "../../reducers/RootReducer";
import { fetchPopularDramaAction } from "../../actions/FetchDataAction";
import DataDisplay from "../../components/DataDisplay";
import LoadMoreButton from "../../components/LoadMoreButton";
import { uniqueArrayFilter } from "../../constant/common";
import { RouterConst } from "../../constant/constants";
import "../../styles/Views.scss";

const PopularDrama: React.FC<PopularDramaProps> = ({ fetchDramaData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [list, setList] = useState<popularDramaInterface[]>([]);
  const [pageNumDrama, setPageNumDrama] = useState<number>(1);
  const isDramaLoaded = list.length > 0;
  const count = useRef(0);

  const loadMoreDramaData = () => {
    setTimeout(() => {
      dispatch(fetchPopularDramaAction(pageNumDrama));
      setPageNumDrama(pageNumDrama + 1);
    }, 1000);
  };

  useEffect(() => {
    if (count.current !== 0) {
      setPageNumDrama(pageNumDrama + 1);
      dispatch(fetchPopularDramaAction(pageNumDrama));
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = list;
    fetchDramaData.map((x: any) => tempArray.push(x));
    tempArray = tempArray.filter(uniqueArrayFilter);
    tempArray = tempArray.filter((x: any) => x.adult !== false);
    setList(tempArray);
  }, [fetchDramaData]);

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };

  return (
    <>
      {list.map((row: popularDramaInterface, index: number) => (
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
