import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import {
  getDramaDetails,
  getDramaCreditDetails,
} from "../services/api.service";
import {
  DetailsProps,
  genresInterface,
  languageInterface,
  DramaDetailsInteface,
  DramaCreditDetailsInterface,
  CrewDetailsInterface,
  DramaCastDetailsInterface,
} from "../interface/interface";
import { RootState } from "../reducers/RootReducer";
import BackButton from "../components/BackButton";
import DataList from "../components/DataList";
import PageTitle from "../components/PageTitle";
import ScrollBox from "../components/ScrollBox";
import { CrewConst } from "../constant/constants";
import { DramaDetailsInit, DramaCreditInit } from "../constant/initialize";
import { CommonTxt, CommonDetailsTxt, DramaDetailsTxt } from "../constant/text";
import "../styles/Views.scss";

const DramaDetailsPage: React.FC<DetailsProps> = ({ selectedData }) => {
  const [details, setDetails] =
    useState<DramaDetailsInteface>(DramaDetailsInit);
  const [credit, setCredit] =
    useState<DramaCreditDetailsInterface>(DramaCreditInit);

  const fetchDramaDetails = async () => {
    let res = await getDramaDetails(selectedData.id);
    if (res) {
      setDetails(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchDramaDetails();
  }, []);

  const fetchCreditDetails = async () => {
    let res = await getDramaCreditDetails(selectedData.id);
    if (res) {
      setCredit(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchCreditDetails();
  }, []);

  const backgroundStyle = {
    top: 0,
    left: 0,
    width: "100%",
    height: "97%",
    backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "10px",
    opacity: 0.3,
  };

  const renderLeftColumn = (
    <>
      <Grid>
        <b>{DramaDetailsTxt.first_air_date}</b>
        <Grid>{details.first_air_date}</Grid>
      </Grid>

      {details.next_episode_to_air && (
        <Grid className="common--padding-top">
          <b>{DramaDetailsTxt.next_episode}</b>
          <Grid>
            {details.next_episode_to_air.name} (
            {details.next_episode_to_air.season_number}x
            {details.next_episode_to_air.episode_number},{" "}
            {details.next_episode_to_air.air_date})
          </Grid>
        </Grid>
      )}

      {details.genres.length > 0 && (
        <Grid className="common--padding-top">
          <b>{CommonDetailsTxt.genre}</b>
          <Grid>
            {details.genres?.map((x: genresInterface, index: number) =>
              index === details.genres.length - 1 ? `${x.name}` : `${x.name}, `
            )}
          </Grid>
        </Grid>
      )}

      {credit.crew.find(
        (x: CrewDetailsInterface) => x.job === CrewConst.DIRECTOR
      ) && (
        <Grid className="common--padding-top">
          <b>{CommonDetailsTxt.director}</b>
          <Grid>
            {credit.crew
              .filter((x: CrewDetailsInterface) => x.job === CrewConst.DIRECTOR)
              ?.map((y: CrewDetailsInterface, index: number) => (
                <Grid>{y.name}</Grid>
              ))}
          </Grid>
        </Grid>
      )}

      {credit.crew.find(
        (x: CrewDetailsInterface) => x.job === CrewConst.WRITER
      ) && (
        <Grid className="common--padding-top">
          <b>{CommonDetailsTxt.writer}</b>
          <Grid>
            {credit.crew
              .filter((x: CrewDetailsInterface) => x.job === CrewConst.WRITER)
              ?.map((y: CrewDetailsInterface, index: number) => (
                <Grid>{y.name}</Grid>
              ))}
          </Grid>
        </Grid>
      )}

      <Grid className="common--padding-top">
        <b>{DramaDetailsTxt.status}</b>
        <Grid>{details.status}</Grid>
      </Grid>
    </>
  );

  const renderRigthColumn = (
    <>
      <Grid>
        <b>{DramaDetailsTxt.last_air_date}</b>
        <Grid>{details.last_air_date}</Grid>
      </Grid>

      {details.episode_run_time.length > 0 && (
        <Grid className="common--padding-top">
          <b>{DramaDetailsTxt.episode_run_time}</b>
          <Grid>{details.episode_run_time}</Grid>
        </Grid>
      )}

      <Grid className="common--padding-top">
        <b>{CommonDetailsTxt.language}</b>
        <Grid>
          {details.spoken_languages?.map(
            (x: languageInterface, index: number) =>
              index === details.spoken_languages.length - 1
                ? `${x.english_name}`
                : `${x.english_name}, `
          )}
        </Grid>

        {credit.crew.find(
          (x: CrewDetailsInterface) => x.job === CrewConst.EXEC_PRODUCER
        ) && (
          <Grid className="common--padding-top">
            <b>{CommonDetailsTxt.exec_producer}</b>
            <Grid>
              {credit.crew
                .filter(
                  (x: CrewDetailsInterface) => x.job === CrewConst.EXEC_PRODUCER
                )
                ?.map((y: CrewDetailsInterface) => (
                  <Grid>{y.name}</Grid>
                ))}
            </Grid>
          </Grid>
        )}

        {credit.crew.find(
          (x: CrewDetailsInterface) => x.job === CrewConst.PRODUCER
        ) && (
          <Grid className="common--padding-top">
            <b>{CommonDetailsTxt.producer}</b>
            <Grid>
              {credit.crew
                .filter(
                  (x: CrewDetailsInterface) => x.job === CrewConst.PRODUCER
                )
                ?.map((y: CrewDetailsInterface) => (
                  <Grid>{y.name}</Grid>
                ))}
            </Grid>
          </Grid>
        )}

        <Grid className="common--padding-top">
          <b>{DramaDetailsTxt.type}</b>
          <Grid>{details.type}</Grid>
        </Grid>
      </Grid>
    </>
  );

  const renderDetails = (
    <>
      <Grid className="details--justify details--emphasize common--padding-top">
      <b>{`${details.name} `}</b>
        <Grid>
          {details.name !== details.original_name && ` (${details.original_name})`}
        </Grid>
      </Grid>
      <Grid className="common--padding-top">
        <Grid>
          <b>{CommonDetailsTxt.overview}</b>
          <Grid>{details.overview}</Grid>
        </Grid>

        <Grid container className="common--padding-top">
          <Grid item xs={6}>
            {renderLeftColumn}
          </Grid>

          <Grid item xs={6}>
            {renderRigthColumn}
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  const renderCast = (
    <Grid className="common--padding">
      <Grid className="common--padding">
        <PageTitle title={CommonDetailsTxt.cast}></PageTitle>
        <ScrollBox>
          {credit.cast
            ?.slice(0, 10)
            .map((row: DramaCastDetailsInterface, index: number) => (
              <DataList
                src={`https://image.tmdb.org/t/p/original${row.profile_path}`}
                title={row.name}
                subtitle={row.character}
                key={index}
              />
            ))}
        </ScrollBox>
      </Grid>
    </Grid>
  );

  return (
    <Grid>
      <Grid className="common--padding">
        <Grid className="common--padding">
          
          <Grid container className="details--display-flex"><Grid style={backgroundStyle} className="details--absolute" />
            <Grid item xs={6} className="details--justify">
              <img
                src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
                width={500}
                alt={CommonTxt.imgNotFound}
              />
            </Grid>

            <Grid item xs={6}>
              {renderDetails}
            </Grid>
          </Grid>
        </Grid>

        {credit.cast.length > 0 && renderCast}
      </Grid>
      <BackButton />
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedData: state.selectedData.selectedData,
});

export default connect(mapStateToProps)(DramaDetailsPage);
