import VehicleInterface from "./VehicleInterface";

interface DeliveryManInterface {
  user_id: number;
  cnh: string;
  price_per_km: number;
  vehicle: VehicleInterface;
}

export default DeliveryManInterface;
