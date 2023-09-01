import { movieInterface, dramaInterface } from "./interface";

export interface DataDisplayProps {
  src: string;
  title: string;
  key: number;
  dataDrama?: dramaInterface;
  dataMovie?: movieInterface;
  onClickDataDrama?: (c:dramaInterface) => void;
  onClickDataMovie?: (c:movieInterface) => void;
}

export interface ComponentProps {
  children: React.ReactNode;
}

export interface PageTitleProps {
  children?: React.ReactNode;
  title: string;
}
