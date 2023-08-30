import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getTrending } from "../services/api.service";
import { movieInterface } from "../interface/interface";
import { common, trending } from "../constant/message";
import DataDisplay from "../components/DataDisplay";
import PageTitle from "../components/PageTitle";
import ScrollBox from "../components/ScrollBox";
import PageContent from "../components/PageContent";

const Trending: React.FC = () => {
  const [trendingList, setTrendingList] = useState<movieInterface[]>([]);

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

  return (
    <PageContent>
      <PageTitle title={trending.title} />
      <ScrollBox>
        {trendingList.map((row: movieInterface, index: number) => (
          <DataDisplay
            src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
            alt="image not found"
            title={row.title || row.original_name}
            key={index}
          />
        ))}
      </ScrollBox>
    </PageContent>
  );
};

export default Trending;
