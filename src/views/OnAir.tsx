import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { OnAirProps, popularDramaInterface } from "../interface/interface";
import { setSelectedDramaData } from "../actions/SelectedDataAction";
import { fetchOnAirData } from "../actions/FetchOnAirDataAction";
import { RootState } from "../reducers/RootReducer";
import DataDisplay from "../components/DataDisplay";
import ScrollBox from "../components/ScrollBox";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";
import LoadMoreButton from "../components/LoadMoreButton";
import { RouterConst } from "../constant/constants";
import { OnAirTxt } from "../constant/text";
import "../styles/Views.scss";

const OnAir: React.FC<OnAirProps> = ({ fetchData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState<number>(1);
  const [onAirDramaList, setOnAirDramaList] = useState<popularDramaInterface[]>(
    []
  );
  const isLoaded = onAirDramaList.length > 0;
  const count = useRef(0);

  const loadMoreData = () => {
    setTimeout(() => {
      dispatch(fetchOnAirData(pageNum));
      setPageNum(pageNum + 1);
    }, 1000);
  };

  useEffect(() => {
    if (count.current !== 0) {
      setPageNum(pageNum + 1);
      dispatch(fetchOnAirData(pageNum));
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = onAirDramaList;
    fetchData.map((x: any) => tempArray.push(x));
    tempArray = tempArray.filter(
      (item: any, index: any, array: string | any[]) => {
        return array.indexOf(item) === index;
      }
    );
    setOnAirDramaList(tempArray);
  }, [fetchData]);

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };

  return (
    <PageContent>
      <PageTitle title={OnAirTxt.title} />
      <ScrollBox>
        {onAirDramaList.map((row: popularDramaInterface, index: number) => (
          <DataDisplay
            src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
            title={row.original_name}
            key={index}
            dataPopularDrama={row}
            onClickPopularDrama={() => onClickCellDrama(row)}
          />
        ))}
        {isLoaded && <LoadMoreButton onClick={loadMoreData} />}
      </ScrollBox>
    </PageContent>
  );
};

const mapStateToProps = (state: RootState) => ({
  fetchData: state.fetchOnAirData.data,
});

export default connect(mapStateToProps)(OnAir);
