import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { User } from 'src/users/users.model';

@Table({ tableName: 'services' })
export class Services extends Model<Services> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  price: string;

  @Column({ type: DataType.STRING, allowNull: false })
  imageURL: string;

  @BelongsToMany(() => User, () => Booking)
  users: User[];
}
