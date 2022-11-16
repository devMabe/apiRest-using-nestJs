import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_profile')
export class Profile{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firtName: string

    @Column()
    lastName: string

    @Column({nullable: true})
    age: number
}