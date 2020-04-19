import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

// instanciando classe
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.post('/', (request, reponse) => {
  // provider = profissional que ira atender o cliente
  // data de agendameto
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parsedDate,
  );

  // verifica se ja existe agendamento nessa data
  if (findAppointmentInSameDate) {
    return reponse
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create(provider, parsedDate);

  return reponse.json(appointment);
});

export default appointmentsRouter;
