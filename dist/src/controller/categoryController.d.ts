import { Request, Response } from "express";
export declare class CategoryController {
    showC: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addC: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CategoryController;
export default _default;
