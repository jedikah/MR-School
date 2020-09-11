import LoginResolver from "./login.resolver";
import WhoAmIResolver from './whoAmI.aut.resolver';
export const AuthResolver =  [
  LoginResolver,
  WhoAmIResolver
]
