import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Word {
    @PrimaryGeneratedColumn('increment')
    id: Number;

    @Column()
    word: String;

    @CreateDateColumn({ default: () => 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ default: () => 'NOW()' })
    updatedAt: Date;
}