module Fda
    class EnforcementClient
        BASE_URL = "https://api.fda.gov/drug/enforcement.json"

        def fetch_ongoing(limit:, skip: 0)
            response = HTTParty.get(
                BASE_URL,
                query: {search: "status:Ongoing", limit: limit, skip: skip}
            )
            JSON.parse(response.body)
        end
    end
end 