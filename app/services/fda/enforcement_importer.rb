module Fda 
    class EnforcementImporter
        def call(limit: 25)
            data = EnforcementClient.new.fetch_ongoing(limit: limit)
            status = {created: 0, skipped: 0, failed: 0}

            (data["results"] || []).each do |api_record|
                
                attrs = map_record(api_record)
                MedicationsInfoV1.create!(attrs)
                status[:created] += 1
                
                if MedicationsInfoV1.exists?(recall_identifier: attrs[:recall_identifier])
                    status[:skipped]+= 1
                    next
                end


            rescue ActiveRecord::RecordInvalid => e
                status[:failed] += 1
                puts "Skipped #{attrs[:recall_identifier]}: #{e.message}"
            end

            status 
        end 

        private 

        def map_record(api_record)
            {
              recall_identifier: api_record["recall_number"].presence || "No recall number provided",
              report_date: api_record["report_date"],
              classification: api_record["classification"],
              description: api_record["description"].presence || "No description provided",
              recall_reason: api_record["reason_for_recall"],
              recall_initiation_date: api_record["recall_initiation_date"],
              status: api_record["status"],
              country: api_record["country"],
              state: api_record["state"],
              city: api_record["city"],
              address: api_record["address_1"],
              recalling_firm: api_record["recalling_firm"],
              product_type: api_record["product_type"],
              event_id: api_record["event_id"],
              termination_date: api_record["termination_date"]
            }
          end

        end

    end
