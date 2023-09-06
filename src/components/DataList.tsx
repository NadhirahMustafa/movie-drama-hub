import React from "react";
import { Grid } from "@mui/material";
import { DataListProps } from "../interface/component.interface";
import { CommonTxt } from "../constant/text";
import "../styles/Component.scss";

const DataList: React.FC<DataListProps> = ({ src, title, subtitle }) => {
  return (
    <Grid className="commonComponent--card-grid">
      <Grid>
        <Grid
          onMouseEnter={(e) =>
            e.currentTarget.classList.add("commonComponent--image-enlarged")
          }
          onMouseLeave={(e) =>
            e.currentTarget.classList.remove("commonComponent--image-enlarged")
          }
        >
          <Grid>
            <Grid className="commonComponent--img-height">
              <img
                className="commonComponent--fade-in"
                src={src}
                alt={CommonTxt.imgNotFound}
                width={100}
                loading="lazy"
              />
            </Grid>
            <Grid>
              <Grid className="commonComponent--color"><b>{title}</b></Grid>
              <Grid className="commonComponent--color">{subtitle}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataList;
