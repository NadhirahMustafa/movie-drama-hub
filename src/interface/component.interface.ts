import { trendingInterface, popularMoviesInterface, popularDramaInterface, movieInterface } from "./interface";

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

export interface ButtonDataProps {
  viewType: string;
  src: string;
  title: string;
  dataMovie?: movieInterface;
  dataDrama?: popularDramaInterface;
  onClickMovie?: (c: movieInterface) => void;
  onClickDrama?: (c: popularDramaInterface) => void;
}

export interface LoadMoreButtonProps {
  onClick: () => void;
}

