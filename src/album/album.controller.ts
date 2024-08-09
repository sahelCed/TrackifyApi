import { Body, Controller, Get,Param,ParseIntPipe,Post } from '@nestjs/common';
import { AlbumDto } from './dto/album.dto';
import { AlbumService } from './album.service';

@Controller('albums')
export class AlbumController {
    constructor(private readonly albumService:AlbumService){}
    @Get("")
    getAlbums(){
        return this.albumService.getAlbums()
    }

    @Get(":id")
    getAlbumById(@Param('id', ParseIntPipe) id: number){
        return this.albumService.getAlbumById(id)
    }

    @Post("")
    addAlbum(@Body() albumDto:AlbumDto){
        return this.albumService.addAlbums(albumDto)
    }
}
