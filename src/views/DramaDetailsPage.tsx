import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { getDramaDetails } from "../services/api.service";
import {
  DetailsProps,
  genresInterface,
  languageInterface,
  DramaDetailsInteface,
} from "../interface/interface";
import { RootState } from "../reducers/rootReducer";
import { common, commonDetails, dramaDetailsConst } from "../constant/message";
import BackButton from "../components/BackButton";
import "../styles/Views.scss";

const MovieDetailsPage: React.FC<DetailsProps> = ({ selectedData }) => {
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
    next_episode_to_air: {},
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

  return (
    <Grid>
      <Grid className="details--padding">
        <Grid className="common--justify">
          <img
            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
            width={100}
            alt="missing"
          />
        </Grid>
        <Grid className="common--justify">
          <b>{details.original_name}</b>
        </Grid>
        <Grid className="details--padding-top">
          <Grid>
            <b>{commonDetails.tagline}</b>
            {details.tagline}
          </Grid>
          <Grid>
            <b>{commonDetails.overview}</b>
            {details.overview}
          </Grid>
          <Grid>
            <b>{dramaDetailsConst.first_air_date}</b>
            {details.first_air_date}
          </Grid>
          <Grid>
            <b>{commonDetails.genre}</b>
            {details.genres?.map((x: genresInterface, index: number) =>
              index === details.genres.length - 1 ? `${x.name}` : `${x.name}, `
            )}
          </Grid>
          <Grid>
            <b>{dramaDetailsConst.episode_run_time}</b>
            {details.episode_run_time?.map((x: [], index: number) =>
              `${x}`
            )}
          </Grid>
          <Grid>
            <b>{commonDetails.language}</b>
            {details.spoken_languages?.map(
              (x: languageInterface, index: number) =>
                index === details.spoken_languages.length - 1
                  ? `${x.english_name}`
                  : `${x.english_name}, `
            )}
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

export default connect(mapStateToProps)(MovieDetailsPage);
