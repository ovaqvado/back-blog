import { Blog } from 'src/blog/entities/blog.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => Blog, (blog) => blog.user, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'blog_id' })
  blogs: Blog[];

  @OneToMany(() => Blog, (blog) => blog.like)
  @JoinColumn({ name: 'likes_id' })
  likes: Blog;
}
