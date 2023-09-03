import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { getMovieDetails, getMovieCreditDetails } from "../services/api.service";
import {
  DetailsProps,
  genresInterface,
  languageInterface,
  MovieDetailsInterface,
  MovieCreditDetailsInterface,
  CrewDetailsInterface,
  MovieCastDetailsInterface,
} from "../interface/interface";
import { RootState } from "../reducers/rootReducer";
import { common, commonDetails, movieDetailsConst } from "../constant/message";
import { crew } from "../constant/constants";
import BackButton from "../components/BackButton";
import "../styles/Views.scss";
import PageTitle from "../components/PageTitle";
import ScrollBox from "../components/ScrollBox";
import DataList from "../components/DataList";

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
  const [credit, setCredit] = useState<MovieCreditDetailsInterface>({
    id: 0,
    cast: [],
    crew: [],
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

  const fetchCreditDetails = async () => {
    let res = await getMovieCreditDetails(selectedData.id);
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
              <b>{details.title}</b>
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
                    <b>{movieDetailsConst.release_date}</b>
                    <Grid>{details.release_date}</Grid>
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
                            (x: CrewDetailsInterface) =>
                              x.job === crew.DIRECTOR
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
                          .filter(
                            (x: CrewDetailsInterface) =>
                              x.job === crew.WRITER
                          )
                          ?.map((y: CrewDetailsInterface, index: number) => (
                            <Grid>{y.name}</Grid>
                          ))}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid>
                    <b>{movieDetailsConst.runtime}</b>
                    <Grid>{details.runtime}</Grid>
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
                            (x: CrewDetailsInterface) =>
                              x.job === crew.PRODUCER
                          )
                          ?.map((y: CrewDetailsInterface, index: number) => (
                            <Grid>{y.name}</Grid>
                          ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="common--padding">
          <PageTitle title={commonDetails.cast}></PageTitle>
          <ScrollBox>
            {credit.cast
              ?.slice(0, 10)
              .map((row: MovieCastDetailsInterface, index: number) => (
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
      <BackButton />
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedData: state.selectedData.selectedData,
});

export default connect(mapStateToProps)(MovieDetailsPage);
