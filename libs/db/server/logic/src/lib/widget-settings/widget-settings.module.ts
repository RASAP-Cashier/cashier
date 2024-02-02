import { Module } from '@nestjs/common';
import { WidgetSettingsService } from './widget-settings.service';
import { WidgetSettingsController } from './widget-settings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantWidgetConfiguration } from './entities/MerchantWidgetConfiguration';
import { Merchant } from './entities/Merchant';
import { GlobalPspConfiguration } from './entities/GlobalPspConfiguration';
import { MerchantPspConfiguration } from './entities/MerchantPspConfiguration';
import { RoutingConfiguration } from './entities/RoutingConfiguration';
import { TransactionData } from './entities/TransactionData';
import { Kyb } from './entities/Kyb';
import { SubscriptionType } from './entities/SubscriptionType';
import { UserRole } from './entities/UserRole';
import { Role } from './entities/Role';
import { RolePermissions } from './entities/RolePermissions';
import { Permissions } from './entities/Permissions';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MerchantWidgetConfiguration, Merchant, GlobalPspConfiguration, MerchantPspConfiguration, RoutingConfiguration,
      TransactionData, Kyb, SubscriptionType, UserRole, Role, RolePermissions, Permissions,
    ]),
  ],
  controllers: [WidgetSettingsController],
  providers: [WidgetSettingsService],
  exports: [WidgetSettingsService, TypeOrmModule],
})
export class WidgetSettingsModule {}
