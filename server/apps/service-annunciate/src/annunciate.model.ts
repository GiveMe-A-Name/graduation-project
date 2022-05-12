import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'annunciate',
})
export class Annunciate extends Model<Annunciate> {
  @Column({
    type: DataType.STRING,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  content: string;

  @Column({
    type: DataType.NUMBER,
  })
  views: number;
}
