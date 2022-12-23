import { Request, Response } from "express";
declare class BlogService {
    private blogRepository;
    constructor();
    find: () => Promise<any>;
    create: (blog: any) => Promise<any>;
    update: (id: any, blog: any) => Promise<any>;
    delete: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BlogService;
export default _default;
