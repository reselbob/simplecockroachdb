import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Writer} from "./Writer"

@Entity({ database: "blogs" })
export class BlogEntry {
    @PrimaryGeneratedColumn("uuid")
    id: string; //uuid

    @Column()
    title: string;

    @Column()
    entry: string;

    @Column({ type: 'timestamp' })
    pubDate: Date;

    @ManyToOne(() => Writer, writer => writer.blogEntries)
    writer: Writer;
}
