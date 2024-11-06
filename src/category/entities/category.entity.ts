import { Blog } from 'src/blog/entities/blog.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Blog, (blog) => blog.category)
  @JoinColumn({ name: 'blog_id' })
  blog: Blog[];
}
