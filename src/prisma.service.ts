import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$extends({
      query: {
        users: {
          $allOperations({ operation, args, query }) {
            if (
              ['create', 'update'].includes(operation) &&
              'data' in args &&
              'password' in args.data &&
              typeof args.data.password === 'string'
            ) {
              args.data.password = bcrypt.hashSync(args.data.password, 10);
            }
            return query(args);
          },
        },
      },
    });

    await this.$connect();
  }
}
