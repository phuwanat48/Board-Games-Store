import { BoardgameEntity } from 'src/boardgames/entities/boardgame.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  /*เครื่องหมาย ! หลังตัวแปร แปลว่า ตัวแปรนี้ไม่ต้องห่วง 
  เดี๋ยว TypeORM มันเอาข้อมูลจากฐานข้อมูลมาใส่ให้แน่นอน ไม่ว่างชัวร์!
  */
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => BoardgameEntity, (boardgames) => boardgames.category)
  games!: BoardgameEntity[];
}
