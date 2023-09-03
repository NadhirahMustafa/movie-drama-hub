import { trendingInterface, popularMoviesInterface, popularDramaInterface } from "./interface";

export interface DataDisplayProps {
  src: string;
  title: string;
  dataTrending?: trendingInterface;
  dataPopularMovie?: popularMoviesInterface;
  dataPopularDrama?: popularDramaInterface;
  onClickTrending?: (c:trendingInterface) => void;
  onClickPopularMovie?: (c:popularMoviesInterface) => void;
  onClickPopularDrama?: (c:popularDramaInterface) => void;
}

export interface DataListProps {
  src: string;
  title: string;
  subtitle: string;
}

export interface ComponentProps {
  children: React.ReactNode;
}

export interface PageTitleProps {
  children?: React.ReactNode;
  title: string;
}
