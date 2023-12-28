import { Module } from '@nestjs/common';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432, 
            username: 'postgres',
            password: '12345678',
            database: 'postgresdb',
            entities: [Product],
            synchronize: true
        }),
        ProductsModule
    ]
})

export class AppModule {}