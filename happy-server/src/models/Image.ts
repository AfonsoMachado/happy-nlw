import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Orphanage from './Orphanage';

// Associando a tabela orphanage com a classe Orphanage
@Entity('images')

// Indicando chave primaria e colunas do banco de dados
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  path: string;

  // relacionamento muitos pra um
  // tipo do retorno, qual o campo que retorna o relacionamento inverso
  // join -> nome da coluna que armazenda o relacionamento de orfanato com images
  @ManyToOne(() => Orphanage, (orphanage) => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}
