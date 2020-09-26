import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Scrim {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'date' })
    created: Date;
}
