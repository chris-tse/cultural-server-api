import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity('skills')
export class Skill extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number

  @Column()
  @ApiProperty({ example: 'TypeScript' })
  skill: string
}
