import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Button } from "@mui/material";
import { setViewType } from "../actions/ViewTypeActions";
import { ViewTypeConst } from "../constant/constants";
import { ViewTypeTxt } from "../constant/text";
import "../styles/Component.scss";

const DataViewType: React.FC = () => {

  const dispatch = useDispatch();

  const [view, setView] = useState(ViewTypeConst.GRID);

  const onClick = (v: string) => {
    if (v === ViewTypeConst.GRID) {
      setView(ViewTypeConst.GRID);
      dispatch(setViewType(ViewTypeConst.GRID));
    } else if (v === ViewTypeConst.LIST) {
      setView(ViewTypeConst.LIST);
      dispatch(setViewType(ViewTypeConst.LIST));
    }
  };

  return (
    <Grid container>
      <Grid item>
        <Button onClick={() => onClick(ViewTypeConst.GRID)}>
          <p
            className={`button--color ${
              view === ViewTypeConst.GRID && "button--active"
            }`}
          >
            {ViewTypeTxt.grid}
          </p>
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={() => onClick(ViewTypeConst.LIST)}>
          <Grid
            className={`button--color ${
              view === ViewTypeConst.LIST && "button--active"
            }`}
          >
            {ViewTypeTxt.list}
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
};
export default DataViewType;
