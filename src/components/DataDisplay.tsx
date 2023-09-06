import React from "react";
import { Grid, Button } from "@mui/material";
import { DataDisplayProps } from "../interface/component.interface";
import { CommonTxt } from "../constant/text";
import "../styles/Component.scss";

const DataDisplay: React.FC<DataDisplayProps> = ({
  src,
  title,
  dataTrending,
  dataPopularMovie,
  dataPopularDrama,
  onClickTrending,
  onClickPopularMovie,
  onClickPopularDrama,
}) => {
  
  const handleClick = () => {
    let functOption = null;
    if (dataTrending) {
      functOption = onClickTrending ? onClickTrending(dataTrending) : null;
    } else if (dataPopularMovie) {
      functOption = onClickPopularMovie ? onClickPopularMovie(dataPopularMovie) : null;
    } else if (dataPopularDrama) {
      functOption = onClickPopularDrama ? onClickPopularDrama(dataPopularDrama) : null
    }
    return functOption;
  };

  return (
    <Grid className="common-component--card-grid">
      <Grid>
        <Button
          onClick={handleClick}
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
              <Grid className="common-component--color">{title}</Grid>
            </Grid>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
};

export default DataDisplay;
