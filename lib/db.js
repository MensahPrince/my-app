import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function initializeDb() {
    const db = await open({
        filename: './ecommerce.db',
        driver: sqlite3.Database
    });
    return db;
}

export const db = initializeDb();