import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Services } from 'src/services/services.model';

interface UserCreationAttrs {
  phone: number;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @Column({ type: DataType.STRING, allowNull: false })
  surname: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  phone: number;
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @BelongsToMany(() => Services, () => Booking)
  services: Services[];
}
