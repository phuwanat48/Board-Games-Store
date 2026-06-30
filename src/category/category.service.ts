import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
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

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number,updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
