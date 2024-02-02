import { Injectable } from '@nestjs/common';
import { CreateWidgetSettingDto } from './dto/create-widget-setting.dto';
import { UpdateWidgetSettingDto } from './dto/update-widget-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MerchantWidgetConfiguration } from './entities/MerchantWidgetConfiguration';

@Injectable()
export class WidgetSettingsService {
  constructor(
    @InjectRepository(MerchantWidgetConfiguration)
    private widgetSettingsRepository: Repository<MerchantWidgetConfiguration>,
  ) {}

  create(createWidgetSettingDto: CreateWidgetSettingDto) {
    return this.widgetSettingsRepository.save(
      this.widgetSettingsRepository.create(createWidgetSettingDto),
    );
  }

  findAll() {
    return this.widgetSettingsRepository.find();
  }

  findOne(widgetId: number): Promise<MerchantWidgetConfiguration | null> {
    console.log('widgetId');
    try {
      return this.widgetSettingsRepository
        .findOneBy({ widgetId });
    }
    catch (err) {
      console.log(err);
      return Promise.resolve(null);
      // if (err instanceof EntityNotFoundError) {
      //   console.log(`WidgetSetting didn"t find, params (widgetId: ${widgetId})`);
      //   return Promise.resolve();
      // }
      //
      // throw new BadRequestException('Can\'t find user');
    }
  }

  async findOneByUserId(userId: number) {
    console.log('findOneByUserId');
    // TODO implement
    return this.findOne(userId);
  }

  update(widgetId: number, updateWidgetSettingDto: UpdateWidgetSettingDto) {
    // TODO implement like for users
    return this.widgetSettingsRepository.save(
      {
        widgetId,
        ...updateWidgetSettingDto,
      },
    );
  }

  async remove(widgetId: number) {
    const entities = await this.findOne(widgetId);
    if (entities) {
      await this.widgetSettingsRepository.remove(entities);
    }
  }
}
