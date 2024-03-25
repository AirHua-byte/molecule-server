import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Base {
  @PrimaryGeneratedColumn()
  id: number;

  baseAdminAvatar: string; //管理员头像
  baseAdminName: string; //	管理员昵称
  baseName: string; //	网站名称
  baseAddress: string; //	网站域名
  baseDescribe: string; //	网站描述
  baseSeo: string; //	网站seo
  baseUploadType: string; //	上传资源方式
  baseEmailType: string; //	邮箱类型
  baseEmailPass: string; //	邮箱PASS码

  ownerEmail: string; //	站主邮箱
  ownerName: string; //	站主名称
  ownerMark: string; //	标识
  ownerCode: string; //	验证码
  ownerComment: boolean; // 评论通知是否开启
  ownerMessage: boolean; // 留言页面
  ownerSubscribe: boolean; // 订阅通知是否开启

  coverDate: string; //	封面日期
  coverTitle: string; //	封面标题
  coverLink: string; //	封面链接
  coverColor: string; //	封面蒙层颜色
  coverImage: string; //	封面图片
  coverDescribe: string; //	封面描述

  ossBucket: string; //	oss相关配置
  ossRegion: string;
  accessKeySecret: string;
  accessKeyId: string;
  ossDomain: string;
}
