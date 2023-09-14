import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { getNowPlayingDrama } from "../../services/api.service";
import { popularDramaInterface } from "../../interface/interface";
import { setSelectedDramaData } from "../../actions/SelectedDataAction";
import { RootState } from "../../reducers/RootReducer";
import ButtonData from "../../components/ButtonData";
import { RouterConst } from "../../constant/constants";
import { CommonTxt } from "../../constant/text";
import "../../styles/Views.scss";

const DramaNowPlaying: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nowPlayingDrama, setNowPlayingDrama] = useState<
    popularDramaInterface[]
  >([]);

  const fetchNowPlayingDrama = async () => {
    let res = await getNowPlayingDrama();
    if (res) {
      setNowPlayingDrama(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchNowPlayingDrama();
  }, []);

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };

  return (
    <Grid className="common--padding">
      <Grid className="now-playing--card-arr">
        {nowPlayingDrama.map((item: popularDramaInterface, index: any) => (
          <ButtonData
            key={index}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            title={item.original_name}
            dataDrama={item}
            onClickDrama={onClickCellDrama}
          />
        ))}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  showType: state.showType.showType,
});
export default connect(mapStateToProps)(DramaNowPlaying);
