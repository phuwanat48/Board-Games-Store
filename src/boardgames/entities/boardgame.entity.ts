import { CategoryEntity } from '../../category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'boardgames' })
export class BoardgameEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  minPlayers!: number;

  @Column()
  maxPlayers!: number;

  @Column({ default: 'available' })
  status!: string;

  @ManyToOne(() => CategoryEntity, (category) => category.games)
  category!: CategoryEntity;
}
