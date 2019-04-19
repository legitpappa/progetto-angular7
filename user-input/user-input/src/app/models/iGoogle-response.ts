export interface IGoogleResponse {
  data: IData;
}
export interface IData{
  translations: ITranslation[];
}
export interface ITranslation {
  translatedText: string;
}
