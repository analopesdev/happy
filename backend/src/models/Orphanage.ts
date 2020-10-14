import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('orphanages')
export default class Orphanages{
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  name: String;

  @Column()
  latitude: Number;

  @Column()
  longitude: Number;

  @Column()
  about: String;

  @Column()
  instructions: String;

  @Column()
  opening_hours: String;

  @Column()
  open_on_weekends: boolean;
}