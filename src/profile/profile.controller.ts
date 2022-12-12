import { Get,UseGuards,Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('profile')
export class ProfileController {

    @UseGuards(AuthGuard('jwt'))
    @Get()
    profile(){
        return {message:"I am Protected Route"};
    }
}
