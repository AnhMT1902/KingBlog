import { Blog } from "./blog";
import { Comment } from "./comment";
import { UserDto } from "../userDto";
export declare class User extends UserDto {
    readonly id: number;
    username: string;
    blogs: Blog[];
    comments: Comment[];
}
