import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RenderModule } from 'nest-next';
import { HelloResolver } from './hello/hello.resolver';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [RenderModule,GraphQLModule.forRoot({
    installSubscriptionHandlers: true,
    autoSchemaFile: 'schema.gql',
  }),],
  controllers: [AppController],
  providers: [AppService,HelloResolver],
})
export class AppModule {}