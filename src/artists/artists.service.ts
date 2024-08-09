import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArtistsService {
    constructor(private readonly prismaService: PrismaService){}

    async getArtists() {
        return await this.prismaService.artists.findMany()
    }


    async getArtistById(id: number) {
        return await this.prismaService.artists.findUnique(
            {
                where:{
                    id
                }
            }
        )
    }
}
