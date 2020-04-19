import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

// salvando dados em array
const appointments = [];

appointmentsRouter.post('/', (request, reponse) => {
  // provider = profissional que ira atender o cliente
  // data de agendameto
  const { provider, date } = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);

  return reponse.json(appointment);
});

export default appointmentsRouter;
