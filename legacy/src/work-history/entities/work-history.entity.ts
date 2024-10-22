import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WorkHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column()
  position: string;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'date', nullable: true })
  endDate: string;

  @Column()
  description: string;
}
