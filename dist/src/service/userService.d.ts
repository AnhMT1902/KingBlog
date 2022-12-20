export declare class UserService {
    private userRepository;
    constructor();
    findAll: () => Promise<any>;
    save: (user: any) => Promise<any>;
    login: (username: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    u: any;
}
