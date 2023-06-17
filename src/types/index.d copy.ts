export type Featuress = {
  
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
  title_small:string;
  
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export interface FeatureItems {
  description: string;
  image: string;
  title: string;
}

interface Props {
  title: string;
  description: string;
  icon: string;
  className: string;
}
