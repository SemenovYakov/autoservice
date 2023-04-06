import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface PostCreationAttrs {
  title: string;
  content: string;
  imageURL: string;
}

@Table({ tableName: 'services' })
export class Services extends Model<Services, PostCreationAttrs> {
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
}
