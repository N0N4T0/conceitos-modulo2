import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();

interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

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

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appointments.push(appointment);

  return reponse.json(appointment);
});

export default appointmentsRouter;
