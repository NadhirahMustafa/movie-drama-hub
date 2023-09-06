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
    <Grid className="commonComponent--card-grid">
      <Grid>
        <Button
          onClick={handleClick}
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
              <Grid className="commonComponent--color">{title}</Grid>
            </Grid>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
};

export default DataDisplay;
