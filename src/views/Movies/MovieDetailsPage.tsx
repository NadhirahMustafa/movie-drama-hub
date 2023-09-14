import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import {
  getMovieDetails,
  getMovieCreditDetails,
} from "../../services/api.service";
import {
  DetailsProps,
  genresInterface,
  languageInterface,
  MovieDetailsInterface,
  MovieCreditDetailsInterface,
  CrewDetailsInterface,
  MovieCastDetailsInterface,
} from "../../interface/interface";
import { RootState } from "../../reducers/RootReducer";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";
import ScrollBox from "../../components/ScrollBox";
import DataList from "../../components/DataList";
import { CrewConst } from "../../constant/constants";
import { MovieDetailsInit, MovieCreditInit } from "../../constant/initialize";
import { CommonTxt, CommonDetailsTxt, MovieDetailsTxt } from "../../constant/text";
import "../../styles/Views.scss";

const MovieDetailsPage: React.FC<DetailsProps> = ({ selectedData }) => {
  const [details, setDetails] =
    useState<MovieDetailsInterface>(MovieDetailsInit);
  const [credit, setCredit] =
    useState<MovieCreditDetailsInterface>(MovieCreditInit);

  const fetchMovieDetails = async () => {
    let res = await getMovieDetails(selectedData.id);
    if (res) {
      setDetails(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  const fetchCreditDetails = async () => {
    let res = await getMovieCreditDetails(selectedData.id);
    if (res) {
      setCredit(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
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
        <b>{MovieDetailsTxt.release_date}</b>
        <Grid>{details.release_date}</Grid>
      </Grid>

      <Grid className="common--padding-top">
        <b>{CommonDetailsTxt.genre}</b>
        <Grid>
          {details.genres?.map((x: genresInterface, index: number) =>
            index === details.genres.length - 1 ? `${x.name}` : `${x.name}, `
          )}
        </Grid>
      </Grid>

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
    </>
  );

  const renderRightColumn = (
    <>
      <Grid>
        <b>{MovieDetailsTxt.runtime}</b>
        <Grid>{details.runtime}</Grid>
      </Grid>

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

        <Grid className="common--padding-top">
          <b>{CommonDetailsTxt.exec_producer}</b>
          <Grid>
            {credit.crew
              .filter(
                (x: CrewDetailsInterface) => x.job === CrewConst.EXEC_PRODUCER
              )
              ?.map((y: CrewDetailsInterface, index: number) => (
                <Grid>{y.name}</Grid>
              ))}
          </Grid>
        </Grid>

        <Grid className="common--padding-top">
          <b>{CommonDetailsTxt.producer}</b>
          <Grid>
            {credit.crew
              .filter((x: CrewDetailsInterface) => x.job === CrewConst.PRODUCER)
              ?.map((y: CrewDetailsInterface, index: number) => (
                <Grid>{y.name}</Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  const renderDetails = (
    <>
      <Grid className="details--justify details--emphasize common--padding-top">
        <b>{details.title}</b>
      </Grid>
      <Grid className="details--justify">
        <i>{details.tagline}</i>
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
            {renderRightColumn}
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  const renderCast = (
    <Grid className="common--padding">
      <Grid className="common--padding">
      <Grid className="common--padding">
        <PageTitle title={CommonDetailsTxt.cast}></PageTitle>
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
    </Grid>
  );

  return (
    <Grid>
      <Grid className="common--padding">
        <Grid>
          <Grid container className="details--display-flex">
            <Grid style={backgroundStyle} className="details--absolute" />
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

export default connect(mapStateToProps)(MovieDetailsPage);
