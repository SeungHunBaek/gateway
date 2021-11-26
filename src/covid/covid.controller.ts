import { Controller, Get } from '@nestjs/common';
import { CovidService } from './covid.service';

@Controller('covid')
export class CovidController {

    constructor(private readonly covidService: CovidService) {}

    @Get()
    async getCovidInfo() {
        const covidInfo: object = await this.covidService.getCovidInfo();
        return covidInfo;
    }
}
