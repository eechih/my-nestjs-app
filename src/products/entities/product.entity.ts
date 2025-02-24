import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 商品貨號
   */
  @Column({ nullable: true })
  sn?: string;

  /**
   * 商品名稱
   */
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  /**
   * 商品售價
   */
  @Column()
  price: number;

  /**
   * 商品成本
   */
  @Column()
  cost: number;

  /**
   * 供應商
   */
  @Column({ nullable: true })
  supplier?: string;

  /**
   * 銷售中
   */
  @Column({ default: false })
  onSale: boolean;

  /**
   * 銷售結束日期（自動下架時間）
   */
  @Column({ nullable: true })
  saleEndDate?: Date;

  /**
   * 建立日期
   */
  @Column()
  createdAt: string;

  /**
   * 修改日期
   */
  @Column()
  updatedAt: string;
}
