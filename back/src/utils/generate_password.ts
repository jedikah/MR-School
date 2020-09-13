import { Injectable } from "@nestjs/common";

@Injectable()
export class GeneratePassword {
    makeid () {
        let text = "";
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
        for (let i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
}
