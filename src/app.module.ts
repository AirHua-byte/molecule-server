import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BaseModule } from './base/base.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { SubscribeModule } from './subscribe/subscribe.module';
import { MyselfModule } from './myself/myself.module';
import { EnvelopeModule } from './envelope/envelope.module';
import { LinksModule } from './links/links.module';
import { User } from './user/entities/user.entity';
import { Base } from './base/entities/base.entity';
import { Article } from './article/entities/article.entity';
import { Comment } from './comment/entities/comment.entity';
import { Subscribe } from './subscribe/entities/subscribe.entity';
import { Myself } from './myself/entities/myself.entity';
import { Envelope } from './envelope/entities/envelope.entity';
import { Link } from './links/entities/link.entity';

@Module({
  imports: [
    UserModule,
    BaseModule,
    ArticleModule,
    CommentModule,
    SubscribeModule,
    MyselfModule,
    EnvelopeModule,
    LinksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'airhua',
      database: 'moleclue',
      synchronize: true,
      logging: true,
      entities: [
        User,
        Base,
        Article,
        Comment,
        Subscribe,
        Myself,
        Envelope,
        Link,
      ],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
