import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    // console.log(this.cats);
    // const newCat = { ...cat, age: Number(cat.age) };
    // console.log(newCat);
    // if (isNaN(newCat.age)) {
    //   return 'age must be number';
    // }
    this.cats.push(cat);
    console.log(this.cats);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
