import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
   constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>) {}

   get(): Promise<User[]> {
      return this.userRepository.find();
   }

   create(CreateUserDto: CreateUserDto) {
      return this.userRepository.save(CreateUserDto);
   }

   update(updateUserDto: UpdateUserDto, userId: number) {
      return this.userRepository.update(userId, updateUserDto);
   }

   show(id: number) {
      return this.userRepository.findOne({where: { id }});
   }

   findByEmail(email:string) {
      return this.userRepository.findOne({ where: { email} });
   }

   delete(userId:number) {
      return this.userRepository.delete(userId);
   }
}
