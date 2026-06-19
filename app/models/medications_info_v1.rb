class MedicationsInfoV1 < ApplicationRecord
    self.table_name = "MedicationsInfov1"

    validates :recall_identifier, uniqueness:true
    validates :description, presence: true

end