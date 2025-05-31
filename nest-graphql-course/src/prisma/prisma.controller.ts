import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('db-test') // Define la ruta base para este controlador
export class PrismaController {
  constructor(private readonly prisma: PrismaService) {} // Inyección de dependencia de PrismaService

  @Get() // Endpoint accesible en GET /db-test
  async testConnection() {
    try {
      // Ejecutar una consulta simple para verificar la conexión
      // Cuenta el número de items en la base de datos
      const countItems = await this.prisma.item.count();
      
      // Devuelve información
      return {
        success: true,
        message: 'Conexión a la base de datos correcta',
        itemCount: countItems, // Número de items en la tabla
      };
    } catch (error) {
      // Captura y reporta cualquier error de conexión
      return {
        success: false,
        message: 'Error al conectar con la base de datos',
        error: error.message,
      };
    }
  }
}