import React from "react";
import { connect } from "react-redux";
import { Grid, Button } from "@mui/material";
import { ButtonDataProps } from "../interface/component.interface";
import { RootState } from "../reducers/rootReducer";
import { ViewTypeConst } from "../constant/constants";
import { CommonTxt } from "../constant/text";
import "../styles/Component.scss";

const ButtonData: React.FC<ButtonDataProps> = ({
  viewType,
  src,
  title,
  dataMovie,
  dataDrama,
  onClickMovie,
  onClickDrama,
}) => {
  
  const handleClick = () => {
    let functOption = null;
    if (dataMovie) {
      functOption = onClickMovie ? onClickMovie(dataMovie) : null;
    } else if (dataDrama) {
      functOption = onClickDrama ? onClickDrama(dataDrama) : null;
    }
    return functOption;
  };

  return (
    <Grid
      className={`button-data--card-layout ${
        viewType !== ViewTypeConst.GRID
          ? "button-data--card-grid "
          : "button-data--card-list"
      }
      `}
    >
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
              width={100}
              alt={CommonTxt.imgNotFound}
              loading="lazy"
            />
          </Grid>
          <Grid className="data-display--color">{title}</Grid>
        </Grid>
      </Button>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  viewType: state.viewType.viewType,
});
export default connect(mapStateToProps)(ButtonData);
