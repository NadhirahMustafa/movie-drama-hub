import React from "react";
import { Grid } from "@mui/material";
import { ReviewListProps } from "../interface/component.interface";
import "../styles/Component.scss";

const ReviewList: React.FC<ReviewListProps> = ({ user, date, review, key }) => {
  return (
    <Grid className="common-component--page-padding">
      <Grid key={key}>
          <Grid container className="review--padding-bottom">
            <Grid className="review--user">{user}</Grid>
            <Grid className="review--date">{date}</Grid>
          </Grid>
          <Grid>{review}</Grid>
        </Grid>
    </Grid>
  );
};

export default ReviewList;
