import { tokenize } from "@angular/compiler/src/ml_parser/lexer"

export interface Token {
   token: string
   email: string
   exp: string
   iat: string
   name: string
   userId: string
}
