import React from "react";
import { Grid } from "@mui/material";
import { DataListProps } from "../interface/component.interface";
import { CommonTxt } from "../constant/text";
import "../styles/Component.scss";

const DataList: React.FC<DataListProps> = ({ src, title, subtitle }) => {
  return (
    <Grid className="common-component--card-grid">
      <Grid>
        <Grid
          onMouseEnter={(e) =>
            e.currentTarget.classList.add("common-component--image-enlarged")
          }
          onMouseLeave={(e) =>
            e.currentTarget.classList.remove("common-component--image-enlarged")
          }
        >
          <Grid>
            <Grid className="common-component--img-height">
              <img
                className="common-component--fade-in"
                src={src}
                alt={CommonTxt.imgNotFound}
                width={100}
                loading="lazy"
              />
            </Grid>
            <Grid>
              <Grid className="common-component--color"><b>{title}</b></Grid>
              <Grid className="common-component--color">{subtitle}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataList;
