import {Column,
    Entity,
    JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn}
    from "typeorm";
import {Category} from "./category";

import {User} from "./user";
import {Like} from "./like";
import {Comment} from "./comment";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    public readonly id: number;
    @Column({type: 'varchar'})
    public title: string;
    @Column({type: 'text'})
    public image: string;
    @Column({type: 'int'})
    public status: number; // 0 : private , 1 : public , 2 : friend
    @Column({type: 'text'})
    public createTime: string;
    @Column({type: 'text'})
    public description: string;
    @ManyToMany(() => Category)
    @JoinTable({name: 'blog_category'})
    public categories: Category[];
    @ManyToOne(() => User, (user) => user.blogs)
    public user: User;
    @OneToMany(() => Like, (like) => like.blog)
    public likes: Like[];
    @OneToMany(() => Comment, (comment) => comment.blog)
    public comments: Comment[];
}