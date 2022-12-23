import { Blog } from "./blog";
import { Comment } from "./comment";
export declare class User {
    readonly id: number;
    username: string;
    avatar: string;
    password: string;
    blogs: Blog[];
    comments: Comment[];
}
