import { GetCoordinates, Response, Coordinates } from '../../types/api';
import apiClient from './apiClient';

export async function fetchAddressCoordinates(
  address: string,
): Promise<Coordinates> {
  const params: GetCoordinates.Payload = {
    q: address,
    format: 'jsonv2',
  };
  const response = await apiClient.get<Response>('search', {
    params: { params },
  });
  return response;
}
