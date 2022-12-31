import {
    Contains,
    Length,
} from 'class-validator'
export abstract class UserDto {
    @Length(0,10)
    username: string
    @Length(0,8)
    password: string
}