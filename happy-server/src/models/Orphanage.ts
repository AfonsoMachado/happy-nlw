import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Image from './Image';

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

  // relacionamento um pra muitos
  // tipo do retorno, qual o campo que retorna o relacionamento inverso
  // join -> nome da coluna que armazenda o relacionamento de orfanato com images
  @OneToMany(() => Image, (image) => image.orphanage, {
    // automaticamente cadastra ou atualiza as imagens realcionadas com um orfanato
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];
}
