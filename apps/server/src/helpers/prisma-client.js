// import { PrismaClient } from '../../../../prisma/client'

// let prisma;

// if (process.env.NODE_ENV !== "production") {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient();
//     }
//     prisma = global.prisma;
// } else {
//     prisma = new PrismaClient();
// }

// export default prisma;

import { PrismaClient } from "@/prisma/client";
const prisma = new PrismaClient();
export default prisma