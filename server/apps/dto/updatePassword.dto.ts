export class UpdatePasswordDto {
  readonly id: number;
  readonly oldPassword: string;
  readonly newPassword: string;
}
