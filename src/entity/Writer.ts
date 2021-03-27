import {Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm";
import {BlogEntry} from "./BlogEntry";

@Entity({ database: "blogs" })
export class Writer {
    @PrimaryGeneratedColumn("uuid")
    id: string; //uuid

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @OneToMany(() => BlogEntry, blogEntry => blogEntry.writer)
    blogEntries: BlogEntry[];

}
