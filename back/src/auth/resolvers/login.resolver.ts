import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService} from '../auth.service';
import { LoginInput } from '../input/login.input';
import { TokenDto } from '../dto/token.dto';

@Resolver('Auth')
export default class LoginResolver {
  constructor(private authService: AuthService) {
  }

  @Mutation(() => TokenDto)
  async login(@Args('input')utilisatateurLogin: LoginInput) {
    return {
      token:  await this.authService.login(utilisatateurLogin)
    }
  }
}
