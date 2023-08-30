export interface DataDisplayProps {
  src: string;
  alt: string;
  title: string;
  key: number;
}

export interface ComponentProps {
  children: React.ReactNode;
}

export interface PageTitleProps {
  children?: React.ReactNode;
  title: string;
}
