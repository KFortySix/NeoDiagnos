import { Pool } from 'pg';

const pool = new Pool({
    HOST: "ec2-44-195-201-3.compute-1.amazonaws.com",
    USER: "zgpufoqmpouibn",
    PASSWORD: "ccdb0451d8eff038e64cb29e6b3d5e0bad696c78fee85a937b6807b6f7716c0f",
    PORT: "5432",
    database: "de3gtrfnhutkf9",
    dialect: "postgres"
});

module.exports = pool;