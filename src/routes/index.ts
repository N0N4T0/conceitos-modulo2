import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

// Toda rota que inicia com appointments vai ser repassado o que vier
// depois pra dentro do appointmentsRouter
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
