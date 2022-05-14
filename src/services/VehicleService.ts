import { VehiclesModel } from "../database/models/VehiclesModel";

class StoreService {
  async create(vehicle: any) {
    ///Implentar
    const hasVehicleRegiter = await VehiclesModel.findAll({
      where: {
        ownerVehicleId: vehicle.ownerVehicleId,
      },
    });
    if (hasVehicleRegiter.length) throw "Veiculo ja está cadastrado";
    const newVehicle = await VehiclesModel.create(vehicle);
    return newVehicle;
  }

  async edit(editVehicle: any): Promise<any> {
    if (!editVehicle) throw "Error ao editar veiculo";
    const vehicleToEdit = await VehiclesModel.findOne({
      where: { ownerVehicleId: editVehicle.ownerVehicleId },
    });
    if (!vehicleToEdit) throw new Error("vehicle not found");
    const editedVehicle = await vehicleToEdit.update(editVehicle);

    return editedVehicle;
  }

  async delete(ownerId: number): Promise<any> {
    console.log(ownerId);
    if (!ownerId) throw "Error ao deletar veiculo";
    const vehicleToDelete = await VehiclesModel.findOne({
      where: { ownerVehicleId: ownerId },
    });
    if (!vehicleToDelete) throw new Error("vehicle not found");
    await vehicleToDelete.destroy();

    return true;
  }
}

export default new StoreService();
