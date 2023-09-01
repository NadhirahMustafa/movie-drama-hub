import { movieInterface, trendingInterface } from "./interface";

export interface DataDisplayProps {
  src: string;
  title: string;
  key: number;
  dataTrending?: trendingInterface;
  dataPopular?: movieInterface;
  onClickDataTrending?: (c:trendingInterface) => void;
  onClickDataPopular?: (c:movieInterface) => void;
}

export interface ComponentProps {
  children: React.ReactNode;
}

export interface PageTitleProps {
  children?: React.ReactNode;
  title: string;
}
