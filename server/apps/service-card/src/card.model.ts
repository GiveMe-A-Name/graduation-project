import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'card',
  createdAt: false,
  updatedAt: false,
})
export class Card extends Model<Card> {
  @Column({
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  money: number;
}
