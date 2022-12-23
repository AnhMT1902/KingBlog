import {Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Blog} from "./blog";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    public readonly id;
    @Column({type: 'int'})
    public userId: number;
    @ManyToOne(() => Blog, (blog) => blog.likes)
    blog: Blog
}