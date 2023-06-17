export type Feature = {
  button: button;
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

export interface FeatureItem {
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
