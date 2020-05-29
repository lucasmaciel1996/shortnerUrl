import { getRepository } from 'typeorm';
import Encurtador from '../models/Encurtador';

interface Request {
  url: string;
  url_short: string;
  date_expire: Date;
}

class CreateEncurtadorService {
  public async execute({
    url,
    url_short,
    date_expire,
  }: Request): Promise<Encurtador> {
    const encurtadorRepository = getRepository(Encurtador);

    const encurtador = encurtadorRepository.create({
      url,
      url_short,
      date_expire,
    });

    await encurtadorRepository.save(encurtador);

    return encurtador;
  }
}

export default CreateEncurtadorService;
