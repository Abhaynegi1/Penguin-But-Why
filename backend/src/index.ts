import fastify from 'fastify';
import cors from '@fastify/cors';
import { dataService } from './dataService';
import { PenguinTelemetry } from './types';

/**
 * Penguin Tracker API Server
 * 
 * Provides endpoints to access Adélie penguin telemetry data 
 * collected by NOAA using Argos satellites.
 */

const server = fastify({
    logger: true
});

// Configure CORS
server.register(cors, {
    origin: true // In production, this should be restricted to the frontend domain
});

// --- Routes ---

/**
 * Root endpoint - API Information
 */
server.get('/', async () => {
    return {
        name: 'Penguin Tracker API',
        version: '1.0.0',
        description: 'Telemetry data for Adélie penguins in the Southern Ocean',
        endpoints: {
            telemetry: '/api/penguins',
            individual: '/api/penguins/:id',
            summary: '/api/stats'
        }
    };
});

/**
 * GET /api/penguins
 * Returns the complete telemetry dataset
 */
server.get('/api/penguins', async () => {
    return dataService.getAllTelemetry();
});

/**
 * GET /api/penguins/:id
 * Returns telemetry points for a specific bird ID (e.g. ADPE1)
 */
interface BirdParams {
    id: string;
}

server.get<{ Params: BirdParams }>('/api/penguins/:id', async (request, reply) => {
    const { id } = request.params;
    const records = dataService.getTelemetryByBird(id);

    if (records.length === 0) {
        return reply.status(404).send({
            error: 'Not Found',
            message: `No telemetry records found for bird ID: ${id}`
        });
    }

    return records;
});

/**
 * GET /api/stats
 * Provides summary statistics and a list of all tracked birds
 */
server.get('/api/stats', async () => {
    return dataService.getStats();
});

// --- Server Lifecycle ---

const start = async () => {
    try {
        // Initialize data service before starting the server
        server.log.info('Initializing penguin telemetry data...');
        dataService.loadData();

        const port = 3001;
        await server.listen({
            port,
            host: '0.0.0.0'
        });

        server.log.info(`Penguin API is live at http://localhost:${port}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
