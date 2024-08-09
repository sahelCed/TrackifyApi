import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArtistsService {
    constructor(private readonly prismaService: PrismaService){}

    async getArtists() {
        return await this.prismaService.artists.findMany()
    }


    async getArtistById(id: number) {
        try {
            return await this.prismaService.artists.findUniqueOrThrow({ where: { id } })
        } catch (error) {
            throw new NotFoundException(`Artist with ID ${id} not found`)
        }
        
    }
}
