import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    //ประกาศตัวแปร categoryRepository เพื่อใช้ในการเข้าถึงฐานข้อมูลของ CategoryEntity
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newcategory = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(newcategory); //save new category to database
  }

  async findAll() {
    //ดึงข้อมูลทั้งหมดของ category จากฐานข้อมูล
    return await this.categoryRepository.find();
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOne({
      where: { id }, // ค้นหาตัวที่มี id ตรงกับที่ส่งมา
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepository.update(id, updateCategoryDto);
    return await this.categoryRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
