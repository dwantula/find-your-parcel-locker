import { GetCoordinates } from '../../types/api';
import { Coordinates } from '../../types/coordinates';
import apiClient from './apiClient';

export async function fetchAddressCoordinates(
  address: string,
): Promise<Coordinates> {
  const params: GetCoordinates.Payload = {
    q: address,
    format: 'jsonv2',
  };
  const response = await apiClient.get<GetCoordinates.Response>('search', {
    params,
  });

  return response.data;
}
