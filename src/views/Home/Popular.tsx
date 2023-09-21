import React from "react";
import { connect } from "react-redux";
import { PopularProps } from "../../interface/interface";
import { RootState } from "../../reducers/RootReducer";
import ScrollBox from "../../components/ScrollBox";
import PageTitle from "../../components/PageTitle";
import PageContent from "../../components/PageContent";
import ShowType from "../../components/ShowType";
import PopularMovie from "../Movies/PopularMovie";
import PopularDrama from "../Drama/PopularDrama";
import { ShowTypeConst } from "../../constant/constants";
import { PopularTxt } from "../../constant/text";
import "../../styles/Views.scss";

const Popular: React.FC<PopularProps> = ({ showType }) => {
  return (
    <PageContent>
      <PageTitle title={PopularTxt.title}>
        <ShowType />
      </PageTitle>
      <ScrollBox>
        {showType === ShowTypeConst.MOVIE ? <PopularMovie /> : <PopularDrama />}
      </ScrollBox>
    </PageContent>
  );
};

const mapStateToProps = (state: RootState) => ({
  showType: state.showType.showType,
});
export default connect(mapStateToProps)(Popular);
