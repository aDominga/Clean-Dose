module Api
    class MedicationsController < ApplicationController
        def index
            medications = MedicationsInfoV1.order(created_at: :desc)
            render json: medications
        end
    end
end
