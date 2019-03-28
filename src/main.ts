import { NestFactory } from '@nestjs/core';
import { RenderModule } from 'nest-next';
import * as Next from 'next';
import { AppModule } from './app.module';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev, dir: "./src/client" });
  await app.prepare();

  const server = await NestFactory.create(AppModule);

  const renderer = server.get(RenderModule);
  renderer.register(server, app, { viewsDir: null });

  await server.listen(3000);
}
bootstrap();
