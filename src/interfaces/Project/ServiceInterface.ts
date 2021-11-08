/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface ServiceInterface {
  index(id: number): Promise<any>;
  show(id: number): Promise<any>;
  create(create: any): Promise<any>;
  edit(id: number, edited: any): Promise<any>;
  delete(id: number): Promise<any>;
}
