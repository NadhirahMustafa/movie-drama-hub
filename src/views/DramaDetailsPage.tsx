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
  NextEpisodeInterface
} from "../interface/interface";
import { RootState } from "../reducers/rootReducer";
import { common, commonDetails, dramaDetailsConst } from "../constant/message";
import { crew } from "../constant/constants";
import BackButton from "../components/BackButton";
import "../styles/Views.scss";
import DataList from "../components/DataList";
import PageTitle from "../components/PageTitle";
import ScrollBox from "../components/ScrollBox";

const DramaDetailsPage: React.FC<DetailsProps> = ({ selectedData }) => {
  const [details, setDetails] = useState<DramaDetailsInteface>({
    adult: false,
    backdrop_path: "",
    created_by: [],
    episode_run_time: [],
    first_air_date: "",
    genres: [],
    last_air_date: "",
    last_episode_to_air: {},
    name: "",
    next_episode_to_air: {
      id: 0,
      name: "",
      overview: "",
      vote_average: 0,
      vote_count: 0,
      air_date: "",
      episode_number: 0,
      episode_type: "",
      production_code: "",
      runtime: "",
      season_number: 0,
      show_id: 0,
      still_path: ""
    },
    networks: [],
    original_language: "",
    original_name: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    seasons: [],
    spoken_languages: [],
    status: "",
    tagline: "",
    type: "",
    vote_average: 0,
    vote_count: 0,
  });
  const [credit, setCredit] = useState<DramaCreditDetailsInterface>({
    id: 0,
    cast: [],
    crew: [],
  });

  const fetchDramaDetails = async () => {
    let res = await getDramaDetails(selectedData.id);
    if (res) {
      setDetails(res);
    } else {
      alert(common.alertMessage);
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
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchCreditDetails();
  }, []);

  const backgroundStyle = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    opacity: 0.3,
  };
  return (
    <Grid>
      <Grid className="common--padding">
        <Grid style={backgroundStyle} className="details--absolute"></Grid>
        <Grid container className="details--display-flex">
          <Grid item xs={6} className="details--justify">
            <img
              src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
              width={550}
              alt={common.imgNotFound}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid className="details--justify details--emphasize details--padding-top">
              <b>{details.original_name}</b>
            </Grid>
            <Grid className="details--justify">
              <i>{details.tagline}</i>
            </Grid>
            <Grid className="details--padding-top">
              <Grid>
                <b>{commonDetails.overview}</b>
                <Grid>{details.overview}</Grid>
              </Grid>
              <Grid container className="details--padding-top">
                <Grid item xs={6}>
                  <Grid>
                    <b>{dramaDetailsConst.first_air_date}</b>
                    <Grid>{details.first_air_date}</Grid>
                  </Grid>
                  <Grid className="details--padding-top">
                    <b>{dramaDetailsConst.next_episode}</b>
                    <Grid>{details.next_episode_to_air.episode_number} ({details.next_episode_to_air.air_date})</Grid>
                  </Grid>
                  <Grid className="details--padding-top">
                    <b>{commonDetails.genre}</b>
                    <Grid>
                      {details.genres?.map(
                        (x: genresInterface, index: number) =>
                          index === details.genres.length - 1
                            ? `${x.name}`
                            : `${x.name}, `
                      )}
                    </Grid>
                  </Grid>
                  <Grid className="details--padding-top">
                    <b>{commonDetails.director}</b>
                    <Grid>
                      {credit.crew
                        .filter(
                          (x: CrewDetailsInterface) => x.job === crew.DIRECTOR
                        )
                        ?.map((y: CrewDetailsInterface, index: number) => (
                          <Grid>{y.name}</Grid>
                        ))}
                    </Grid>
                  </Grid>
                  <Grid className="details--padding-top">
                    <b>{commonDetails.writer}</b>
                    <Grid>
                      {credit.crew
                        .filter((x: CrewDetailsInterface) => x.job === crew.WRITER)
                        ?.map((y: CrewDetailsInterface, index: number) => (
                          <Grid>{y.name}</Grid>
                        ))}
                    </Grid>
                  </Grid>
                  <Grid className="details--padding-top">
                    <b>{dramaDetailsConst.status}</b>
                    <Grid>
                      {details.status}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                <Grid>
                    <b>{dramaDetailsConst.last_air_date}</b>
                    <Grid>{details.last_air_date}</Grid>
                  </Grid>
                  <Grid className="details--padding-top">
                    <b>{dramaDetailsConst.episode_run_time}</b>
                    <Grid>{details.episode_run_time}</Grid>
                  </Grid>
                  <Grid className="details--padding-top">
                    <b>{commonDetails.language}</b>
                    <Grid>
                      {details.spoken_languages?.map(
                        (x: languageInterface, index: number) =>
                          index === details.spoken_languages.length - 1
                            ? `${x.english_name}`
                            : `${x.english_name}, `
                      )}
                    </Grid>
                    <Grid className="details--padding-top">
                      <b>{commonDetails.exec_producer}</b>
                      <Grid>
                        {credit.crew
                          .filter(
                            (x: CrewDetailsInterface) =>
                              x.job === crew.EXEC_PRODUCER
                          )
                          ?.map((y: CrewDetailsInterface, index: number) => (
                            <Grid>{y.name}</Grid>
                          ))}
                      </Grid>
                    </Grid>
                    <Grid className="details--padding-top">
                      <b>{commonDetails.producer}</b>
                      <Grid>
                        {credit.crew
                          .filter(
                            (x: CrewDetailsInterface) => x.job === crew.PRODUCER
                          )
                          ?.map((y: CrewDetailsInterface, index: number) => (
                            <Grid>{y.name}</Grid>
                          ))}
                      </Grid>
                    </Grid>
                    <Grid className="details--padding-top">
                    <b>{dramaDetailsConst.type}</b>
                    <Grid>
                      {details.type}
                    </Grid>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="common--padding">
          <Grid className="common--padding">
            <PageTitle title={commonDetails.cast}></PageTitle>
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
      </Grid>
      <BackButton />
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedData: state.selectedData.selectedData,
});

export default connect(mapStateToProps)(DramaDetailsPage);
