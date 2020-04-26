import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * Recebimento das informações
 * Tratativa de erros/excessões
 * Acesso ao repositório
 */

// DTO
interface Request {
  provider_id: string;
  date: Date;
}

// Dependency Invertion
class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    // regra de negócio
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    // verifica se ja existe agendamento nessa data
    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
