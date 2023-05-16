import { 
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @Get()
    getUsers() {
        return this.userService.get();
    }

    @Post()
    store(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.create(CreateUserDto);
    }

    @Patch('/:userId')
    update(
        @Body() updateUserDto: UpdateUserDto,
        @Param('userId', ParseIntPipe) userId: number,
    ) {
        return this.userService.update(updateUserDto, userId);
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number) {
       return this.userService.show(userId);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.delete(userId);
    }
}