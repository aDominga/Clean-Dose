require "httparty"
require "json"

namespace :medications do 
    desc "Import FDA data into MedicationsInfov1 table"
    task import: :environment do 
        status = Fda::EnforcementImporter.new.call(limit: ENV.fetch("LIMIT", 25).to_i)
        puts "Created #{status[:created]}"
        puts "Skipped #{status[:skipped]}"
        puts "Failed #{status[:failed]}"
    end 
end