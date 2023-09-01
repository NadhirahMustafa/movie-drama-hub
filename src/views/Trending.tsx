import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getTrending } from "../services/api.service";
import { trendingInterface } from "../interface/interface";
import { setSelectedData } from "../redux/actions";
import { common, trending } from "../constant/message";
import { router, mediaType } from "../constant/constants";
import DataDisplay from "../components/DataDisplay";
import PageTitle from "../components/PageTitle";
import ScrollBox from "../components/ScrollBox";
import PageContent from "../components/PageContent";

const Trending: React.FC = () => {
  const [trendingList, setTrendingList] = useState<trendingInterface[]>([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchTrendingList = async () => {
    let res = await getTrending();
    if (res) {
      setTrendingList(res);
    } else {
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchTrendingList();
  }, []);

  const onClickCell = (c: trendingInterface) => {
    dispatch(setSelectedData(c));
    if (c.media_type === mediaType.DRAMA){
      navigate(router.DRAMA_DETAILS);

    } else {
      navigate(router.MOVIE_DETAILS);
    }
    
  };

  return (
    <PageContent>
      <PageTitle title={trending.title} />
      <ScrollBox>
        {trendingList.map((row: trendingInterface, index: number) => (
          <DataDisplay
            src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
            title={row.title || row.original_name}
            key={index}
            dataTrending={row}
            onClickDataTrending={onClickCell}
          />
        ))}
      </ScrollBox>
    </PageContent>
  );
};

export default Trending;
