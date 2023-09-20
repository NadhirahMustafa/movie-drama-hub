import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Button } from "@mui/material";
import { setShowType } from "../actions/ComponentTypeAction";
import { ShowTypeConst } from "../constant/constants";
import { ShowTypeTxt } from "../constant/text";
import "../styles/Component.scss";

const ShowType: React.FC = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(ShowTypeConst.MOVIE);

  const onClickMovie = () => {
    setShow(ShowTypeConst.MOVIE);
    dispatch(setShowType(ShowTypeConst.MOVIE));
  };

  const onClickDrama = () => {
    setShow(ShowTypeConst.DRAMA);
    dispatch(setShowType(ShowTypeConst.DRAMA));
  };

  return (
    <Grid container className="common-component--page-padding">
      <Grid item>
        <Button onClick={() => onClickMovie()}>
          <Grid
            className={`popular--button ${
              show === ShowTypeConst.MOVIE && "common--button-active "
            }`}
          >
            {ShowTypeTxt.movie}
          </Grid>
        </Button>
      </Grid>

      <Grid item>
        <Button onClick={() => onClickDrama()}>
          <Grid
            className={`popular--button ${
              show === ShowTypeConst.DRAMA && "common--button-active "
            }`}
          >
            {ShowTypeTxt.drama}
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
};
export default ShowType;
