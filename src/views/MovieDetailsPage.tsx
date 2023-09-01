import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { getMovieDetails } from "../services/api.service";
import {
  DetailsProps,
  genresInterface,
  languageInterface,
  MovieDetailsInterface,
} from "../interface/interface";
import { RootState } from "../reducers/rootReducer";
import { common, commonDetails, movieDetailsConst } from "../constant/message";
import BackButton from "../components/BackButton";
import "../styles/Views.scss";

const MovieDetailsPage: React.FC<DetailsProps> = ({ selectedData }) => {
  const [details, setDetails] = useState<MovieDetailsInterface>({
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {},
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  });

  const fetchMovieDetails = async () => {
    let res = await getMovieDetails(selectedData.id);
    if (res) {
      setDetails(res);
    } else {
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchMovieDetails();    
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
          <b>{details.title}</b>
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
            <b>{movieDetailsConst.release_date}</b>
            {details.release_date}
          </Grid>
          <Grid>
            <b>{commonDetails.genre}</b>
            {details.genres?.map((x: genresInterface, index: number) =>
              index === details.genres.length - 1 ? `${x.name}` : `${x.name}, `
            )}
          </Grid>
          <Grid>
            <b>{movieDetailsConst.runtime}</b>
            {details.runtime}
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
