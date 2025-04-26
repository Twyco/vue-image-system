export interface GenericPagination<DataType> {
  data: Array<DataType>;
  lastPage: number;
  currentPage: number;
  total: number;
  perPage: number;
}
