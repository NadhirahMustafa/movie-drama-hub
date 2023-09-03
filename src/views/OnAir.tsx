import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { getDramaOnAir } from "../services/api.service";
import {
  popularMoviesInterface,
  popularDramaInterface,
} from "../interface/interface";
import { setSelectedDramaData, setSelectedMovieData } from "../redux/actions";
import { common, onAir, popular } from "../constant/message";
import { router, showTypeConstant } from "../constant/constants";
import DataDisplay from "../components/DataDisplay";
import ScrollBox from "../components/ScrollBox";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";

const OnAir: React.FC = () => {
  const [onAirDramaList, setOnAirDramaList] = useState<
    popularDramaInterface[]
  >([]);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchPopularDrama = async () => {
    let res = await getDramaOnAir();
    if (res) {
        setOnAirDramaList(res);
    } else {
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchPopularDrama();
  }, []);

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(router.DRAMA_DETAILS);
  };

  
  return (
    <PageContent>
      <PageTitle title={onAir.title} />
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
      </ScrollBox>
    </PageContent>
  );
};

export default OnAir;
