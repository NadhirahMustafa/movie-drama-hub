import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDramaOnAir } from "../services/api.service";
import { popularDramaInterface } from "../interface/interface";
import { setSelectedDramaData } from "../actions/SelectedDataActions";
import DataDisplay from "../components/DataDisplay";
import ScrollBox from "../components/ScrollBox";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";
import { RouterConst } from "../constant/constants";
import { CommonTxt, OnAirTxt } from "../constant/text";
import "../styles/Views.scss";

const OnAir: React.FC = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [onAirDramaList, setOnAirDramaList] = useState<popularDramaInterface[]>([]);

  const fetchPopularDrama = async () => {
    let res = await getDramaOnAir();
    if (res) {
      setOnAirDramaList(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchPopularDrama();
  }, []);

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
      </ScrollBox>
    </PageContent>
  );
};

export default OnAir;
