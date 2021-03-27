import "reflect-metadata";
import { createConnection, Repository, Connection } from "typeorm";
import * as faker from 'faker';
import {Writer} from "./entity/Writer";
import {BlogEntry} from "./entity/BlogEntry";

const setRandomWriter = async (connection: Connection) : Promise<Writer> =>  {
    const repository = await connection.getRepository(Writer);
    console.log("Saving a new Writer into the database...");

    const writer = new Writer();
    writer.firstName = faker.name.firstName();
    writer.lastName = faker.name.lastName();
    writer.email = `${writer.firstName}.${writer.lastName}@${faker.internet.domainName()}.${faker.internet.domainSuffix()}`

    await repository.save(writer);

    console.log(`Saved a new Writer: ${writer}`);

    return writer
}

const setRandomBlogEntry = async (connection: Connection, writer: Writer) : Promise<BlogEntry> =>  {
    const repository = await connection.getRepository(BlogEntry);
    console.log("Saving a new BlogEntry into the database...");

    const blogEntry = new BlogEntry();
    blogEntry.title = faker.lorem.words(3);
    blogEntry.entry = faker.lorem.words(30)
    blogEntry.writer = writer;
    blogEntry.pubDate = faker.date.between('1/1/1999', '12/31/2020')

    await repository.save(blogEntry);

    console.log(`Saved a new BlogEntry: ${blogEntry}`);

    return blogEntry
}

const getBlogEntriesByWriter = async (connection: Connection ): Promise<Array<Writer>> => {
    const repository = connection.getRepository(Writer);
    const writers = await repository.find({ relations: ["blogEntries"] });
    return writers;
}

createConnection().then(async (connection) => {
    try {
        await connection.query("CREATE DATABASE blogs");
    } catch (e) {
        console.log(e.message);
    }

    const writers = new Array<Writer>();
    for(let i =0; i <5;i++){
        const writer = await setRandomWriter(connection);
        writers.push(writer)
    }

    for (const writer of writers) {
        for(let i =0; i <10;i++){
           await setRandomBlogEntry(connection, writer);
        }
    }

    const writersWithEntries = await getBlogEntriesByWriter(connection);

    console.log('SAMPLE WRITER:\n');
    //make some nice output
    console.log(JSON.stringify(writersWithEntries[0],null, 4));

    console.log('\nSeeder finished!\n');
});
