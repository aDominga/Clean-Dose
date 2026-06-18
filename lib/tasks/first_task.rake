require "httparty"
require "json"


task :first_task do
    hash_map= {}
    hash_map["New_Information"] = {}
    puts "-------First-Task--Retrieve-Data-----"
    response = HTTParty.get("https://api.fda.gov/drug/enforcement.json?search=status:Ongoing&limit=25")
    data = JSON.parse(response.body)

    for i in 0..data["results"].length - 1 do 
        hash_map["New_Information"][i] = {
            reason_for_recall: data["results"][i]["reason_for_recall"],
            recall_number: data["results"][i]["recall_number"],
            product_description: data["results"][i]["product_description"]
        }
    end

   puts hash_map["New_Information"]

   puts "-------First-Task--Retrieve-Data-----"
end