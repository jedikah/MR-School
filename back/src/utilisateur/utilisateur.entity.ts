import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'utilisateur' })
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  nom: string;

  @Column({ length: 30 })
  prenom: string;
}
