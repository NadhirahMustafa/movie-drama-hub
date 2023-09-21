import React from "react";
import { connect } from "react-redux";
import { Grid, Button } from "@mui/material";
import { ButtonDataProps } from "../interface/component.interface";
import { RootState } from "../reducers/RootReducer";
import { ViewTypeConst } from "../constant/constants";
import { CommonTxt } from "../constant/text";
import "../styles/Component.scss";

const ButtonData: React.FC<ButtonDataProps> = ({
  viewType,
  src,
  title,
  children,
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
              width={100}
              alt={CommonTxt.imgNotFound}
              loading="lazy"
            />
          </Grid>
          <Grid className="common-component--color">{title}</Grid>
          <Grid className="common-component--color button-data--small-font">{children}</Grid>
        </Grid>
      </Button>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  viewType: state.viewType.viewType,
});
export default connect(mapStateToProps)(ButtonData);
