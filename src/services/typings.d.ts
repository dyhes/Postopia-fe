interface APIRes<T> {
  success: boolean;
  message: string;
  data: T;
}
