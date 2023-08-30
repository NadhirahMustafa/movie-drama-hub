import React from "react";
import { Grid, Button } from "@mui/material";
import { DataDisplayProps } from "../interface/component.interface";
import "../styles/Component.scss";

const DataDisplay: React.FC<DataDisplayProps> = ({ src, alt, title, key }) => {
  return (
    <Grid key={key} className="data-display--card-grid">
      <Grid>
        <Button
          key={key}
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
                alt={alt}
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
