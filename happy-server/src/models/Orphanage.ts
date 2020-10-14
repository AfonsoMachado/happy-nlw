import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Associando a tabela orphanage com a classe Orphanage
@Entity('orphanages')

// Indicando chave primaria e colunas do banco de dados
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  latitude: number;
  @Column()
  longitude: number;
  @Column()
  about: string;
  @Column()
  instructions: string;
  @Column()
  opening_hours: string;
  @Column()
  open_on_weekend: boolean;
}
