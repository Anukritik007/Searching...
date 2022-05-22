export interface IAppState {
  resources: {
    loading: boolean;
    data: Array<IResource>;
    error: string;
  };
}

export interface IResource {
  name: string;
  description: string;
  resourceUrl: string;
  category: string;
  type: "text" | "video" | "audio";
  rating?: number;
  previewImgUrl?: string;
}

export interface ResourceCardProps {
  title: string;
  imgUrl?: string;
  description: string;
}
