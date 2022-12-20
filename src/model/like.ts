import {Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Blog} from "./blog";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    public readonly id;
    @OneToOne(() => User)
    @JoinColumn()
    public user: User;
    @ManyToOne(() => Blog, (blog) => blog.likes)
    blog: Blog
}