import { Module } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],
  imports:[TypeOrmModule.forFeature([User])]
})
export class UserModule {}
