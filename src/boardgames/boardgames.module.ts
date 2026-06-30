import { Module } from '@nestjs/common';
import { BoardgamesService } from './boardgames.service';
import { BoardgamesController } from './boardgames.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardgameEntity } from './entities/boardgame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardgameEntity])],
  controllers: [BoardgamesController],
  providers: [BoardgamesService],
})
export class BoardgamesModule {}
