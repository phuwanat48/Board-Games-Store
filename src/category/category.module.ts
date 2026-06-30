import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { BoardgameEntity } from 'src/boardgames/entities/boardgame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, BoardgameEntity])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
