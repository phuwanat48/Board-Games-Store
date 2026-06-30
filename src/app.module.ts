import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { BoardgamesModule } from './boardgames/boardgames.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category/entities/category.entity';
import { BoardgameEntity } from './boardgames/entities/boardgame.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // ใส่ username ของ phpMyAdmin คุณภู
      password: '', // ใส่ password ของ phpMyAdmin คุณภู
      database: 'boardgames store', // 👈 อย่าลืมสร้างฐานข้อมูลชื่อนี้ใน phpMyAdmin ก่อนนะ!
      entities: [CategoryEntity, BoardgameEntity], // 👈 นำ Entity ทั้งคู่มารุ่นลงทะเบียนตรงนี้ด้วย
      synchronize: true, // ให้มันสร้างตารางอัตโนมัติในช่วง dev
    }),
    CategoryModule,
    BoardgamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
