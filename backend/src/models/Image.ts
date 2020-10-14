import {Entity,  Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Orphanage from './Orphanage'

@Entity('images')
export default class Image{
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  path: String;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({name: 'orphanage_id'})
  orphanage: Orphanage;
}