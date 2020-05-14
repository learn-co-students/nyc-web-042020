json.extract! student, :id, :name, :grade, :created_at, :updated_at
json.url student_url(student, format: :json)
