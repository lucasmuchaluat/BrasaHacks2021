import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmConfig: TypeOrmModuleOptions = {
   type: 'postgres',
   host: 'tuffi.db.elephantsql.com',
   port: 5432,
   username: 'jierexho',
   password: 'u3piSzlbx02IfPI25KVUsDhVzDva0l2d',
   database: 'jierexho',
   entities: [__dirname + '/../**/*.entity.{js,ts}'],
   synchronize: true
};
