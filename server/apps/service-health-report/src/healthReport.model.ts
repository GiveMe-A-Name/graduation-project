import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'health_report',
  updatedAt: false,
})
export class HealthReport extends Model<HealthReport> {
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  student_id: number;

  @Column({
    type: DataType.STRING,
  })
  student_name: string;

  @Column({
    type: DataType.STRING,
  })
  temperature: string;

  @Column({
    type: DataType.STRING,
  })
  position: string;

  @Column({
    type: DataType.STRING,
  })
  health_code_color: string;

  @Column({
    type: DataType.STRING,
  })
  health: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;
}
