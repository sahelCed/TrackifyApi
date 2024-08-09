import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
    constructor(private readonly artistsService:ArtistsService){}

    @Get("")
    async getArtists(){
        return await this.artistsService.getArtists()
    }

    @Get(":id")
    async getArtistById(@Param("id",ParseIntPipe) id: number){
        return await this.artistsService.getArtistById(id)
    }
}
