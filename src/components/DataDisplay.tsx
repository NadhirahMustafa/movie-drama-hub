import React from "react";
import { Grid, Button } from "@mui/material";
import { DataDisplayProps } from "../interface/component.interface";
import { common } from "../constant/message";
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
                alt={common.imgNotFound}
                width={100}
                loading="lazy"
              />
            </Grid>
            <Grid>
              <p className="data-display--color">{title}</p>
            </Grid>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
};

export default DataDisplay;
