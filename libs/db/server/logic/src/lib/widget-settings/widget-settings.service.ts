import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWidgetSettingDto } from './dto/create-widget-setting.dto';
import { UpdateWidgetSettingDto } from './dto/update-widget-setting.dto';
import { MerchantWidgetConfiguration } from './entities/MerchantWidgetConfiguration';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Repository } from 'typeorm';
import { Merchant } from './entities/Merchant';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WidgetSettingsService {
  constructor(
    @InjectRepository(MerchantWidgetConfiguration)
    private readonly widgetSettingsRepository: Repository<MerchantWidgetConfiguration>,
    @InjectRepository(Merchant)
    private readonly usersRepository: Repository<Merchant>,
  ) {}

  async create(dto: CreateWidgetSettingDto) {
    // TODO implement validation if exists

    await this.widgetSettingsRepository.save(
      this.widgetSettingsRepository.create({
        configuration: dto.configuration,
        merchant: {
          userId: dto.userId,
        },
      }),
    );

    return this.findByUserId(dto.userId);
  }

  findAll() {
    return this.widgetSettingsRepository.find();
  }

  public async findOne(widgetId: number) {
    try {
      return this.widgetSettingsRepository
        .findOneBy({ widgetId });
    }
    catch (err) {
      throw new BadRequestException('Can\'t widget settings');
    }
  }

  private async findOneByWidgetIdAndUserId(widgetId: number, userId) {
    try {
      return await this.widgetSettingsRepository.findOne({
        where: {
          widgetId,
          merchant: {
            userId,
          },
        },
      });
    }
    catch (err) {
      throw new BadRequestException('Can\'t widget settings');
    }
  }

  public async findByUserId(userId: number): Promise<MerchantWidgetConfiguration[]> {
    const merchant = await this.usersRepository.findOne({
      where: { userId },
      relations: ['merchantWidgetConfigurations'],
    });

    if (merchant) {
      return merchant.merchantWidgetConfigurations;
    }

    return [];
  }

  public async update(dto: UpdateWidgetSettingDto) {
    const widgetSettings = await this.findOneByWidgetIdAndUserId(dto.widgetId, dto.userId);

    if (widgetSettings) {
      widgetSettings.configuration = dto.configuration;

      await this.widgetSettingsRepository.save(widgetSettings);

      return await this.findOneByWidgetIdAndUserId(dto.widgetId, dto.userId);
    }
    else {
      throw new NotFoundException(
        'User not found.',
      );
    }
  }

  public async remove(widgetId: number) {
    const entities = await this.findOne(widgetId);
    if (entities) {
      await this.widgetSettingsRepository.remove(entities);
    }
  }
}
