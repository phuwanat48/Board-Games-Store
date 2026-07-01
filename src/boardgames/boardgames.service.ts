import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardgameDto } from './dto/create-boardgame.dto';
import { UpdateBoardgameDto } from './dto/update-boardgame.dto';
import { BoardgameEntity } from './entities/boardgame.entity';

@Injectable()
export class BoardgamesService {
  constructor(
    //ประกาศตัวแปร boardgameRepository เพื่อใช้ในการเข้าถึงฐานข้อมูลของ BoardgameEntity
    @InjectRepository(BoardgameEntity)
    private readonly boardgameRepository: Repository<BoardgameEntity>,
  ) {}

  async create(createBoardgameDto: CreateBoardgameDto) {
    const newboardgame = this.boardgameRepository.create(createBoardgameDto);
    return await this.boardgameRepository.save(newboardgame); //save new boardgame to database
  }

  async findAll() {
    // return await this.boardgameRepository.find(); //ดึงข้อมูลทั้งหมดของ boardgame จากฐานข้อมูลแบบไม่แสดงcategoryเวลาget
    return await this.boardgameRepository.find({
      relations: {
        category: true,
      },
    }); //ดึงข้อมูลทั้งหมดของ boardgame จากฐานข้อมูลแบบแสดงcategoryเวลาget
  }

  async findOne(id: number) {
    return await this.boardgameRepository.findOne({
      where: { id }, // ค้นหาตัวที่มี id ตรงกับที่ส่งมา
      relations: {
        category: true, // แวะดึงข้อมูลหมวดหมู่ (Category) พ่วงมาโชว์ด้วยเลย
      },
    });
  }

  async update(id: number, updateBoardgameDto: UpdateBoardgameDto) {
    //สั่งอัปเดตข้อมูลเข้าฐานข้อมูลไปก่อน
    await this.boardgameRepository.update(id, updateBoardgameDto);
    // พอยืนยันใน DB แล้ว สั่งไปดึงข้อมูลบอร์ดเกมตัวนั้นกลับมาส่งโชว์ทันที
    return await this.boardgameRepository.findOne({
      where: { id },
      relations: { category: true }, // 👈 ดึงหมวดหมู่กลับมาโชว์คู่กันด้วยเลย!
    });
  }

  remove(id: number) {
    return `This action removes a #${id} boardgame`;
  }
}
