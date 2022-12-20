import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "./blog";
import {Like} from "./like";
import {Comment} from "./comment";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public readonly id: number;
    @Column({type: 'varchar'})
    public username: string;
    @Column({type: 'varchar'})
    public password: string;
    @OneToMany(() => Blog, (blog) => blog.user)
    public blogs: Blog[];
    @OneToMany(() => Comment, (comment) => comment.user)
    public comments: Comment[];
}