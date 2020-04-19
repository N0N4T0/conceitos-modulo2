import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// Toda rota que inicia com appointments vai ser repassado o que vier
// depois pra dentro do appointmentsRouter
routes.use('/appointments', appointmentsRouter);

export default routes;
