import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common'
import { WorkHistoryService } from './work-history.service'

import { ApiQuery, ApiTags } from '@nestjs/swagger'

@ApiTags('work history')
@Controller('work-history')
export class WorkHistoryController {
  constructor(private readonly workHistoryService: WorkHistoryService) {}

  @Get()
  @ApiQuery({ name: 'sort', description: 'Key to sort by. Valid options: `startDate`', required: false })
  findAll(@Query('sort') sort?: string) {
    if (!sort) {
      return this.workHistoryService.findAll()
    }

    switch (sort) {
      case 'startDate':
        return this.workHistoryService.findAllSortedByStartDate()
      default:
        throw new HttpException('Invalid sort key. Try `?sort=startDate`', HttpStatus.BAD_REQUEST)
    }
  }
}
