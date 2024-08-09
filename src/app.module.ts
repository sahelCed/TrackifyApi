import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigFactory, ConfigModule } from '@nestjs/config';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [AlbumModule, PrismaModule,ConfigModule.forRoot({isGlobal:true}), ArtistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
