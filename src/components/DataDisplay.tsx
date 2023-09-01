import React from "react";
import { Grid, Button } from "@mui/material";
import { DataDisplayProps } from "../interface/component.interface";
import { common } from "../constant/message";
import "../styles/Component.scss";

const DataDisplay: React.FC<DataDisplayProps> = ({
  src,
  title,
  key,
  dataDrama,
  dataMovie,
  onClickDataDrama,
  onClickDataMovie,
}) => {
  const handleClick = () => {
    let functOption = null;
    if (dataDrama) {
      functOption = onClickDataDrama ? onClickDataDrama(dataDrama) : null;
    } else if (dataMovie) {
      functOption = onClickDataMovie ? onClickDataMovie(dataMovie) : null;
    }
    return functOption;
  };

  return (
    <Grid key={key} className="data-display--card-grid">
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
