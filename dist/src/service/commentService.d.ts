declare class CommentService {
    private commentRepository;
    constructor();
    findByBlogId: () => Promise<any>;
    saveComment: (data: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    edit: (id: any, data: any) => Promise<any>;
}
declare const _default: CommentService;
export default _default;
