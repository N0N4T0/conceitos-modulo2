import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

// salvando dados em array
const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, reponse) => {
  // provider = profissional que ira atender o cliente
  // data de agendameto
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  // verifica se ja existe agendamento nessa data
  if (findAppointmentInSameDate) {
    return reponse
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);

  return reponse.json(appointment);
});

export default appointmentsRouter;
