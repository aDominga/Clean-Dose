module Api
    class MedicationsController < ApplicationController
        def index
            medications = MedicationsInfoV1.order(created_at: :desc)
            render json: medications
        end

        def show 
            medication = MedicationsInfoV1.find(params[:id])
            render json: medication
        rescue ActiveRecord::RecordNotFound
            render json: { error: "Medication not found" }, status: :not_found
        end
    end
end
