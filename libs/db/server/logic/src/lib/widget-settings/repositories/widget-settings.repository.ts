import { EntityRepository, Repository } from 'typeorm';
import { MerchantWidgetConfiguration } from '../entities';

@EntityRepository(MerchantWidgetConfiguration)
export class WidgetSettingsRepository extends Repository<MerchantWidgetConfiguration> {}
