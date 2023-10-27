interface IUserModel {
  id: string;
  name: string;
  imageUri: string;
}

interface IProductModel {
  id: string;
  name: string;
  imageUri: string;
}

export interface IReviewModel {
  id: string;
  message: string;
  stars: number;
  date: string;
  user: IUserModel;
  product: IProductModel;
}
