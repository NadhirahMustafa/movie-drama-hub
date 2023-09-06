import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getTrending } from "../services/api.service";
import { trendingInterface } from "../interface/interface";
import { setSelectedData } from "../actions/DataActions";
import DataDisplay from "../components/DataDisplay";
import PageTitle from "../components/PageTitle";
import ScrollBox from "../components/ScrollBox";
import PageContent from "../components/PageContent";
import { RouterConst, MediaTypeConst } from "../constant/constants";
import { CommonTxt, TrendingTxt } from "../constant/text";
import "../styles/Views.scss";

const Trending: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [trendingList, setTrendingList] = useState<trendingInterface[]>([]);

  const fetchTrendingList = async () => {
    let res = await getTrending();
    if (res) {
      setTrendingList(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchTrendingList();
  }, []);

  const onClickCell = (c: trendingInterface) => {
    dispatch(setSelectedData(c));
    if (c.media_type === MediaTypeConst.DRAMA){
      navigate(RouterConst.DRAMA_DETAILS);

    } else {
      navigate(RouterConst.MOVIE_DETAILS);
    }    
  };

  return (
    <PageContent>
      <PageTitle title={TrendingTxt.title} />
      <ScrollBox>
        {trendingList.map((row: trendingInterface, index: number) => (
          <DataDisplay
            src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
            title={row.title || row.original_name}
            key={index}
            dataTrending={row}
            onClickTrending={onClickCell}
          />
        ))}
      </ScrollBox>
    </PageContent>
  );
};

export default Trending;
