import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { OnAirProps, popularDramaInterface } from "../../interface/interface";
import { setSelectedDramaData } from "../../actions/SelectedDataAction";
import { fetchOnAirDramaAction } from "../../actions/FetchDataAction";
import { RootState } from "../../reducers/RootReducer";
import DataDisplay from "../../components/DataDisplay";
import ScrollBox from "../../components/ScrollBox";
import PageTitle from "../../components/PageTitle";
import PageContent from "../../components/PageContent";
import LoadMoreButton from "../../components/LoadMoreButton";
import { uniqueArrayFilter } from "../../constant/common";
import { RouterConst } from "../../constant/constants";
import { OnAirTxt } from "../../constant/text";
import "../../styles/Views.scss";

const OnAir: React.FC<OnAirProps> = ({ fetchData, totalPages }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState<number>(1);
  const [list, setList] = useState<popularDramaInterface[]>([]);
  const isLoaded = list.length > 0;
  const count = useRef(0);

  const loadMoreData = () => {
    setTimeout(() => {
      dispatch(fetchOnAirDramaAction(pageNum));
      setPageNum(pageNum + 1);
    }, 1000);
  };

  useEffect(() => {
    setList([]);
    if (count.current !== 0) {
      setPageNum(pageNum + 1);
      dispatch(fetchOnAirDramaAction(pageNum));
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = list;
    if (pageNum !== 1) {
      fetchData.map((x: any) => tempArray.push(x));
      tempArray = tempArray.filter(uniqueArrayFilter);
      tempArray = tempArray.filter((x: any) => x.adult !== false);
      setList(tempArray);
    }
  }, [fetchData]);

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };
  return (
    <PageContent>
      <PageTitle title={OnAirTxt.title} />
      <ScrollBox>
        {list?.map((row: popularDramaInterface, index: number) => (
          <DataDisplay
            src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
            title={row.name}
            key={index}
            dataPopularDrama={row}
            onClickPopularDrama={() => onClickCellDrama(row)}
          />
        ))}
        {isLoaded && pageNum <= totalPages && (
          <LoadMoreButton onClick={loadMoreData} />
        )}
      </ScrollBox>
    </PageContent>
  );
};

const mapStateToProps = (state: RootState) => ({
  fetchData: state.fetchOnAirData.data,
  totalPages: state.fetchOnAirData.totalPages,
});

export default connect(mapStateToProps)(OnAir);
