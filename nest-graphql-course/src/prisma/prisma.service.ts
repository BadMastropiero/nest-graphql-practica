import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // Llamamos al constructor de PrismaClient
    super();
  }
  // Se ejecuta cuando el módulo se inicializa
  async onModuleInit() {
    // Establecemos la conexión a la base de datos al iniciar la aplicación
    await this.$connect();
    console.log('Conexión a la base de datos establecida');
  }

  // Se ejecuta cuando el módulo se destruye
  async onModuleDestroy() {
    // Cerramos la conexión a la base de datos cuando la aplicación se detiene
    await this.$disconnect();
    console.log('Conexión a la base de datos cerrada');
  }
}
