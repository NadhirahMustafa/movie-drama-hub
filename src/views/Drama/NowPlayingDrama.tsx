import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  DisplayDramaProps,
  popularDramaInterface,
} from "../../interface/interface";
import { fetchNowPlayingDramaData } from "../../actions/FetchDataAction";
import { setSelectedDramaData } from "../../actions/SelectedDataAction";
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

const NowPlayingDrama: React.FC<DisplayDramaProps> = ({
  fetchData,
  totalPages,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [nowPlayingDrama, setNowPlayingDrama] = useState<
    popularDramaInterface[]
  >([]);
  const count = useRef(0);

  useEffect(() => {
    const loadMoreData = () => {
      if (pageNumber <= totalPages) {
        setTimeout(() => {
          dispatch(fetchNowPlayingDramaData(pageNumber));
        }, 100);
      }
    };
    loadMoreData();
  }, [pageNumber]);

  useEffect(() => {
    if (count.current !== 0) {
      setPageNum(pageNum + 1);
      dispatch(fetchNowPlayingDramaData(pageNum));
    }
    count.current++;
  }, [dispatch]);

  useEffect(() => {
    let tempArray: any = nowPlayingDrama;
    if(pageNum !== 1) {
      fetchData.map((x: any) => tempArray.push(x));
      let uniqueArray: any = tempArray.filter(uniqueArrayFilter);
      uniqueArray = uniqueArray.filter((x: any) => x.adult!==false);
      setTimeout(() => {
        setNowPlayingDrama(uniqueArray);
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

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };

  return (
    <Grid className="common--padding">
      <Grid className="now-playing--card-arr">
        {nowPlayingDrama.map((item: popularDramaInterface, index: any) => (
          <ButtonData
            key={index}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            title={item.name}
            dataDrama={item}
            onClickDrama={onClickCellDrama}
          />
        ))}
      </Grid>
      <ScrollToTop />
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  fetchData: state.fetchNowPlayingDramaData.data,
  totalPages: state.fetchNowPlayingDramaData.totalPages,
});
export default connect(mapStateToProps)(NowPlayingDrama);
