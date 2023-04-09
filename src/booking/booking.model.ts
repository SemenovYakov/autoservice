import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Services } from 'src/services/services.model';
import { User } from 'src/users/users.model';

@Table({ tableName: 'booking', createdAt: false, updatedAt: false })
export class Booking extends Model<Booking> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
  @ForeignKey(() => Services)
  @Column({ type: DataType.INTEGER })
  serviceId: number;
}
