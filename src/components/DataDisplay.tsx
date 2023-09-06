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
    <Grid className="data-display--card-grid">
      <Grid>
        <Button
          onClick={handleClick}
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
              <Grid className="data-display--color">{title}</Grid>
            </Grid>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
};

export default DataDisplay;
