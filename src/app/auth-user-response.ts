export class AuthUserResponse {
    constructor( public id: string = "",
                 public success: boolean = false,
                 public error : string = "" ) {}
}
