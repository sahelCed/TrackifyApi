import { Injectable, NotFoundException } from '@nestjs/common';
import { AlbumDto } from './dto/album.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumService {
    constructor(private readonly prismaService: PrismaService){}

    async getAlbums() {
        return await this.prismaService.album.findMany()
    }

    async getAlbumById(id: number) {
        try {
            return await this.prismaService.album.findUniqueOrThrow({ where: { id } })
        } catch (error) {
            throw new NotFoundException(`Album with ID ${id} not found`)
        }
        
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
