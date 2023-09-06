import React from "react";
import { Grid } from "@mui/material";
import { DataListProps } from "../interface/component.interface";
import { CommonTxt } from "../constant/text";
import "../styles/Component.scss";

const DataList: React.FC<DataListProps> = ({ src, title, subtitle }) => {
  return (
    <Grid className="data-display--card-grid">
      <Grid>
        <Grid
          onMouseEnter={(e) =>
            e.currentTarget.classList.add("data-display--image-enlarged")
          }
          onMouseLeave={(e) =>
            e.currentTarget.classList.remove("data-display--image-enlarged")
          }
        >
          <Grid>
            <Grid className="data-display--img-height">
              <img
                className="fade-in"
                src={src}
                alt={CommonTxt.imgNotFound}
                width={100}
                loading="lazy"
              />
            </Grid>
            <Grid>
              <Grid className="data-display--color"><b>{title}</b></Grid>
              <Grid className="data-display--color">{subtitle}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataList;
