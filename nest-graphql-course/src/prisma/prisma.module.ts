import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaController } from './prisma.controller';

@Global() // Hace que el módulo sea global, disponible en toda la aplicación
@Module({
  providers: [PrismaService], // Registra el servicio Prisma
  exports: [PrismaService],   // Exporta el servicio para que otros módulos lo utilicen
  controllers: [PrismaController], // Registra el controlador para pruebas de conexión
})
export class PrismaModule {}