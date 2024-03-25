import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 256,
  })
  username: string; // 用户名
  @Column({
    length: 256,
  })
  password: string; // 密码
  isForgotPassword: boolean; //是否忘记密码
  code: string; // code
}
