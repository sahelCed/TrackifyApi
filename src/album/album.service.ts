import { Injectable } from '@nestjs/common';
import { AlbumDto } from './dto/album.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumService {
    constructor(private readonly prismaService: PrismaService){}

    getAlbums() {
        return this.prismaService.album.findMany()
    }

    getAlbumById(id: number) {
        return this.prismaService.album.findUnique({
            where:{
                id:id
            },
            include:{
                artist:true,
            }
        })
    }

    addAlbums(albumDto: AlbumDto){
        const { name,popularity,smallCover,cover,releaseDate,description } = albumDto
        return this.prismaService.album.create({
            data:{
                name,
                description,
                popularity,
                smallCover,
                cover,
                releaseDate:new Date(releaseDate * 1000),
                artistId:1
            }
        })
    }
}
