import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn,  }from 'typeorm'        
import Image from './Image'

@Entity('orphanages')
export default class Orphanage{
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

  @OneToMany(() => Image, image => image.orphanage,{
    cascade: ['insert', 'update'],
  })

  @JoinColumn({name: 'orphanage_id'})
  images: Image[];
}